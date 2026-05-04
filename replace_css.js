const fs = require('fs');
const path = require('path');

const dir = './app';

const classMap = {
  'container-x': 'w-full max-w-[1280px] mx-auto px-4 md:px-7',
  'eyebrow': 'inline-block text-xs font-bold tracking-[0.08em] text-green uppercase mb-3.5',
  'chip': 'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-soft text-green-dark',
  'btn btn-primary': 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold px-5.5 py-3 rounded-lg border-[1.5px] border-green cursor-pointer transition-all duration-250 hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap bg-green text-white shadow-[0_4px_14px_-4px_rgba(19,122,77,0.4)] hover:bg-green-dark hover:border-green-dark',
  'btn btn-red': 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold px-5.5 py-3 rounded-lg border-[1.5px] border-red cursor-pointer transition-all duration-250 hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap bg-red text-white hover:bg-[#B83329] hover:border-[#B83329]',
  'btn btn-outline': 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold px-5.5 py-3 rounded-lg border-[1.5px] border-rule cursor-pointer transition-all duration-250 hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap text-ink bg-white hover:border-green hover:text-green',
  'btn btn-white': 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold px-5.5 py-3 rounded-lg border-[1.5px] border-white cursor-pointer transition-all duration-250 hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap bg-white text-green hover:bg-cream',
  'btn btn-ghost': 'inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold px-5.5 py-3 rounded-lg border-[1.5px] border-transparent cursor-pointer transition-all duration-250 hover:-translate-y-[1px] active:translate-y-0 whitespace-nowrap text-inherit hover:text-green',
  'card': 'bg-white border border-rule rounded-2xl transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(19,122,77,0.22)] hover:border-green/25',
  'under': 'bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-[position:0_100%] bg-no-repeat pb-[2px] transition-[background-size] duration-300 hover:bg-[length:0_0]',
  'star': 'inline-block text-yellow tracking-[0.1em]',
  'marquee': 'flex w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]',
  'pulse-dot': 'animate-[pulse-dot_1.8s_ease-out_infinite]'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [key, value] of Object.entries(classMap)) {
    // Basic string replacement for class names
    // This is simple but works for literal class strings
    const regex = new RegExp(`(?<=className=["'\`].*?\\b)${key}(?=\\b.*?["'\`])`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, value);
      changed = true;
    }
    
    // Also try without regex just in case
    if (content.includes(`"${key}"`)) {
      content = content.replace(new RegExp(`"${key}"`, 'g'), `"${value}"`);
      changed = true;
    }
    if (content.includes(`'${key}'`)) {
      content = content.replace(new RegExp(`'${key}'`, 'g'), `'${value}'`);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
