module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
    },
    autoprefixer: {},
    cssnano: ctx.env === "production" ? {} : false,
  },
});
