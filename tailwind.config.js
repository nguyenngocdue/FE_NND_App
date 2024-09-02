/** @type {import('tailwindcss').Config} */
export default {
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "@pages/*": ["src/pages/*"],
    },
  },
  include: ["src"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
