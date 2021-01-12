module.exports = {
  extends: ["airbnb/base"],
  rules: {
    quotes: [2, "double"],
    "max-len": ["error", 120],
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },
};
