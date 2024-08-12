/** @type {impor('tailwindcss').Config}*/

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
    plugins: [],
  },
};
