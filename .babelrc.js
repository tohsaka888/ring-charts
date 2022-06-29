module.exports = {
  presets: ["@babel/env", "@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        helpers: true,
      },
    ],
  ],
};
