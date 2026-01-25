/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F0F0F',
        'text-primary': '#EEEEEE',
        'accent': '#dc3545',
        'accent-hover': '#c82333',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Ubuntu Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      fontSize: {
        'base': '14px',
      },
      maxWidth: {
        'content': '750px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
