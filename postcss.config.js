module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "@csstools/postcss-global-data": {
      files: ["src/styles/breakpoints.css"],
    },
    "postcss-custom-media": {},
  },
};
