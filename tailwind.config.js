/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      keyframes: {
        moveY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
     
      animation: {
        moveY: 'moveY 4s ease-in-out infinite', // Duration: 2s, Infinite Loop
      },
    },
    
  },
  variants: {
    extend: {
      before: ['hover', 'focus'], // Add other states if needed
    },
  },
  plugins: [],
}