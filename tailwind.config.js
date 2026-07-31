/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card-bg)",
        foreground: "var(--foreground)",
        body: "var(--text-body)",
        primary: "var(--accent-primary)",
        secondary: "var(--accent-secondary)",
        border: "var(--border-color)",
        success: "var(--success)",
      },
    },
  },
  plugins: [],
};
