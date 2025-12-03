/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Corporate Theme (Petronas-inspired)
        primary: {
          DEFAULT: '#00A19C', // Teal
          50: '#E6F7F7',
          100: '#CCF0EF',
          200: '#99E0DF',
          300: '#66D1CF',
          400: '#33C1BF',
          500: '#00A19C', // Main
          600: '#00817D',
          700: '#00615E',
          800: '#00403E',
          900: '#00201F',
        },
        secondary: {
          DEFAULT: '#003D4C', // Dark Blue
          50: '#E6EDEF',
          100: '#CCDADF',
          200: '#99B5BF',
          300: '#66919F',
          400: '#336C7F',
          500: '#003D4C', // Main
          600: '#00313D',
          700: '#00252E',
          800: '#00181E',
          900: '#000C0F',
        },
        accent: {
          DEFAULT: '#FDB913', // Gold/Yellow
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FDB913', // Main
          600: '#CA940F',
          700: '#976F0B',
          800: '#654A08',
          900: '#322504',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
