import watchMedia from "svelte-media";

const mediaqueries = {
  small: "(min-width: 640px)",
  medium: "(min-width: 768px)",
  large: "(min-width: 1024px)",
  xLarge: "(min-width: 1280px)",
  xXLarge: "(min-width: 1536px)",
  dark: "(prefers-color-scheme: dark)",
  noanimations: "(prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaqueries);