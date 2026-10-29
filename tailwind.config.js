/** @type {import('tailwindcss').Config} */
const c = (v) => `hsl(var(--${v}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        fg: c("fg"),
        card: c("card"),
        muted: c("muted"),
        "muted-fg": c("muted-fg"),
        line: c("line"),
        primary: c("primary"),
        "primary-fg": c("primary-fg"),
        accent: c("accent"),
        "accent-fg": c("accent-fg"),
        da: c("da"),
        ba: c("ba"),
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
