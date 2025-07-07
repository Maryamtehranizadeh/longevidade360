/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte,html}", // Make sure this path covers your HomePage.jsx
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        error: "var(--error)",
        success: "var(--success)",
        border: "var(--border)",
        gray: "var(--gray)",
        buttonHover: "var(--button-hover)",
      },
    },
  },
  plugins: [],
};
