"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Tag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "ol"
  | "ul"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "header"
  | "footer"
  | "aside"
  | "figure"
  | "figcaption"
  | "blockquote";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const r = el.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    if (inView) {
      const t = window.setTimeout(() => setVisible(true), 30);
      return () => window.clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);

    const fallback = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
