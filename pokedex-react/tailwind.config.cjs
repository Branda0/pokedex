/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      code: ["DotGothic16", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "960px",
      // => @media (min-width: 1440px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        bugDark: "#84CC16",
        bugLight: "#bef264",
        darkDark: "#57534E",
        darkLight: "#78716C",
        dragonDark: "#6D28D9",
        dragonLight: "#8B5CF6",
        electricDark: "#FACC15",
        electricLight: "#fde047",
        fairyDark: "#F87171",
        fairyLight: "#FCA5A5",
        fightingDark: "#7C2D12",
        fightingLight: "#d64306",
        fireDark: "#EA580C",
        fireLight: "#fb923c",
        flyingDark: "#8B5CF6",
        flyingLight: "#A78BFA",
        ghostDark: "#6D28D9",
        ghostLight: "#8B5CF6",
        grassDark: "#059669",
        grassLight: "#34d399",
        groundDark: "#D6B55A",
        groundLight: "#f0cf75",
        iceDark: "#67E8F9",
        iceLight: "#A5F3FC",
        normalDark: "#A8A877",
        normalLight: "#cfcfa5",
        poisonDark: "#86198F",
        poisonLight: "#d946ef",
        psychicDark: "#EC4899",
        psychicLight: "#F472B6",
        rockDark: "#B8A038",
        rockLight: "#dec452",
        steelDark: "#6B7280",
        steelLight: "#9CA3AF",
        waterDark: "#0EA5E9",
        waterLight: "#7dd3fc",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|decoration)-(bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|grass|ground|ice|normal|poison|psychic|rock|steel|water)/,
    },
  ],
};
