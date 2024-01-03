/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.25)",
          "0 0px 45px rgba(255, 255,255, 0.15)"
        ]
      },
      colors: {
        primary: '#17e38a'
      },
      backgroundImage: {
        'bg-global': "url('../app/components/background.PNG')",
      }
    },
  },
  plugins: [],
}
