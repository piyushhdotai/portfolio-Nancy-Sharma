/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Bordo / Green / Cream, applied with the 60-30-10 rule:
      //   60% cream  – page background and surfaces
      //   30% forest – hero, headings, stats band, footer
      //   10% bordo  – buttons, active states, small accents
      // Flat colours only: no gradients anywhere.
      colors: {
        cream: { DEFAULT: '#F5DABF', light: '#FBF3E8', paper: '#FFFDF9' },
        forest: { DEFAULT: '#0F3D3A', light: '#1A524E' },
        bordo: { DEFAULT: '#6C151E', dark: '#521017' },
        ink: '#0F3D3A', // headings
        body: '#4A5F5C', // paragraph text
        muted: '#5E716E', // small meta text (still ≥ 4.5:1 on cream)
        line: '#E8D9C4', // borders and dividers
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 34px -14px rgba(15, 61, 58, 0.25)',
        btn: '0 8px 18px -8px rgba(108, 21, 30, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
