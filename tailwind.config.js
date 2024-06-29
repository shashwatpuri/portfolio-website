/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textcolor1: '#fafafa', // for heading
        textcolor2: '#d6d6d6', // for paragrarph
        bordercolor: '#383838',
        accent1: '#FFDB6E', // yellow accent
        bgcolor1: '#1e1e1f', // primary bg color
        bgcolor2: '#202022', // for smaller cards
        bgcolor3: '#2b2b2c', // navbar bg
      },
      fontFamily: {
        poppins: "Poppins",
      },
      content: {
        'timelinebullet': 'url("./timeline-bullet.svg")', // Replace with your image path
      }
    },
    screens: {
      'sm': '580px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1250px',
    }
  },
  plugins: [],
}

