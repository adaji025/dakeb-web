/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dakeb: {
          black: {
            light: "#4F4F4F",
            mid: "#333333",
          },
          green: {
            mid: "#157145",
            dark: "#002500",
          },
          yellow: {
            mid: "#DEA90A",
            dark: "#F2994A",
          },
          blue: {
            mid: "#1D08AF",
            dark: "#241E4E",
          },
          red: "#EB0E0B",
          pink: "#DE4D86",
        }
       
      },
    },
  },
  plugins: [],
};
