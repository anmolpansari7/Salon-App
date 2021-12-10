module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('/src/assets/auth-bg.jpg')",
      },
      colors: {
        "btn-tab": "#31353D",
        "tab-bar": "#F2F2F2",
        "inactive-tab-left": "#E9E9E9",
        "inactive-tab-right": "#F8F7F7",
        "page-bg": "#E3E3E3",
        "list-bg": "#FCFCFC",
        "overview-btn": "#E9E9E9",
        "detail-card-border": "#C4C8CF",
      },
      spacing: {
        22: "5.25rem",
        76: "18.25rem",
        78: "19.5rem",
        200: "42rem",
        // 200: "41.5rem",
      },
      minHeight: {
        200: "41.5rem",
      },
      maxHeight: {
        200: "41.5rem",
      },
      strokeWidth: {
        1.5: "1.5",
      },
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    borderRadius: {
      "auth-box": "2rem",
      "tab-cor": "1rem",
      "list-box": "2rem",
      "edit-btn": "0.5rem",
      "cust-info-box": "4rem",
    },
    fill: ["hover", "focus", "none"],
    stroke: (theme) => ({
      dark: theme("colors.gray.900"),
      light: theme("colors.white"),
    }),
  },
  variants: {},
  plugins: [],
};
