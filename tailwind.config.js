/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        hcd: {
          dark: '#0f172a',
          blue: '#2563eb',
          light: '#f3f4f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: 'clamp(3rem, 6vw, 5rem)',
        sectionSm: 'clamp(2.5rem, 5vw, 4rem)',
      },
    },
  },
  plugins: [],
}
