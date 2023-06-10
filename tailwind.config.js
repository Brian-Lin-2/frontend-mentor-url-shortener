/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(223, 28%, 95.1%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "v-dark-blue": "hsl(255, 11%, 22%)",
        "v-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        mobile: "375px",
      },
      backgroundImage: {
        "shorten-pattern-mob": "url('./images/bg-shorten-mobile.svg')",
        "shorten-pattern-desk": "url('./images/bg-shorten-desktop.svg')",
        "boost-pattern-mob": "url('./images/bg-boost-mobile.svg')",
        "boost-pattern-desk": "url('./images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
