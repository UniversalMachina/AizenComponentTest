/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bob': 'bob 3s ease-in-out infinite',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }, // <-- Closing bracket added here
      colors: {
        "customGray": {
          "100": "#fdfdfd",
          "200": "#efefef",
          "300": "#e1e1e1",
          "400": "#d1d1d1",
          "500": "#c2c2c2",
          "600": "#afafb0",
          "700": "#9f9f9f",
          "800": "#888",
          "900": "#6c6c6c",
          "1000": "#555",
          "1100": "#4a4a4a",
          "1200": "#404040",
          "1300": "#3c3c3c",
          "1400": "#333",
          "1500": "#282828",
          "1600": "#1c1c1c",
          "1700": "#141513",
          "1800": "#000"
        },
        customColor: {
          100: '#e6ccff', // Light vibrant purple
          150: '#cc99ff', // Lighter vibrant purple (added unique shade)
          200: '#b266ff', // Vibrant purple
          300: '#9933ff', // Medium vibrant purple
          350: '#8000ff', // Medium vibrant purple
          400: '#6600cc', // Darker vibrant purple (corrected the comment)
          500: '#4d0099', // Dark vibrant purple
        },
      },
      spacing: {
      },
      fontFamily: {
        poppins: "Poppins",
        inherit: "inherit",
        "roboto-slab": "'Roboto Slab'",
        poly: "Poly",
        "body-base-regular": "Inter",
        "dm-sans": "'DM Sans'",
        "fira-sans-condensed": "'Fira Sans Condensed'",
      },
      borderRadius: {
      },
    },
    fontSize: {
      inherit: "inherit"
    },
    screens: {
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
