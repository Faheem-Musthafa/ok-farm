import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OK Farm Fresh",
    short_name: "OK Farm",
    description:
      "Fresh cow milk, curd, ghee, nadan moru, lassi & sambharam from Edarikode, Kottakkal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf3",
    theme_color: "#137a4d",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/OK farm.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
