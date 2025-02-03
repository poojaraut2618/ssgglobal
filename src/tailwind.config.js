/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // Ensures Tailwind scans your React components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  