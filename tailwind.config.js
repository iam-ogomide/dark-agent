/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#181818',
        'orange': '#FF4A17'
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/hero_bg.jpeg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

