// Export all plugins our postcss should use
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/index.html', './src/index.js', './src/components/**/*.jsx'],
      fontFace: false,
      safelist: [],
    }),
  ],
};
