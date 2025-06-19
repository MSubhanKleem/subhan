// postcss.config.js
const tailwindcssPostcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindcssPostcss,
    require('autoprefixer'),
  ],
};
