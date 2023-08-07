const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  daisyui: {
    logs: false,
      themes: ["garden",
        // TODO: figure out all the colors in the custom dark mode
        {
          "custom-dark": {
            "primary": "#adf989",
            "secondary": "#ede18b",
            "accent": "#c69e25",
            "neutral": "#701a75",
            "base-100": "#323843",
            "info": "#96bff8",
            "success": "#6aecdd",
            "warning": "#f0b624",
            "error": "#ea628b",
          },
        },
      ],
  },

  plugins: [daisyui],
};

module.exports = config;
