/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'headspace-blue': '#59b4f7',
        'headspace-dark-blue': '#344964',
        'headspace-orange': '#f4a72e',
        'headspace-orange-dark': '#dc6c24',
        'headspace-peach': '#faaf99',
        'headspace-light-peach': '#f9c692',
        'headspace-light-orange': '#FFF5EB',
        'headspace-gray': '#98a7b0',
        'headspace-light-gray': '#fbf7f7',
      },
      fontFamily: {
        headspace: ["'Headspace Apercu'", 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
