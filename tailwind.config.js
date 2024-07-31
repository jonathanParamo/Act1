/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: 'rgba(16, 20, 25, 1)', // Fondo oscuro
        darkSecondary: 'rgba(55, 65, 81, 1)', // Fondo secundario oscuro
        darkTertiary: '#00000010',
      },
    },
  },
  screens: {
    xs: "450px",
    sm: "540px",
    md: "720px",
    lg: "1080px",
  },
  plugins: [],
}

