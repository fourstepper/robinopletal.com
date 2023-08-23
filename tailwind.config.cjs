const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    listStyleType: {
      disc: 'disc',
    },
    extend: {},
  },

  daisyui: {
    logs: false,
      darkTheme: "custom-dark",
      themes: [
        // TODO: figure out all the colors in the custom dark mode
        {
            "custom-light": {
                "primary": "#c94740",
                "secondary": "#9dd657",
                "accent": "#45e0d6",
                "neutral": "#1c1f26",
                "base-100": "#f7f7f7",
                "info": "#a1c6e8",
                "success": "#22c55e",
                "warning": "#eaad34",
                "error": "#ef1e1a",
            },
            "custom-dark": {
                "primary": "#adf989",
                "secondary": "#ede18b",
                "accent": "#c69e25",
                "neutral": "#171c27",
                "base-100": "#323843",
                "info": "#96bff8",
                "success": "#6aecdd",
                "warning": "#f0b624",
                "error": "#ea628b",
              },
            },
        ],
    },
  plugins: [daisyui, require("@tailwindcss/typography")],
};

module.exports = config;
