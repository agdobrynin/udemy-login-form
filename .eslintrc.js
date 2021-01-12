module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parser: "babel-eslint",
    extends: ["airbnb/base"],
    rules: {
        quotes: [2, "double"],
        "max-len": ["error", 120],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        indent: ["error", 4],
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: "webpack.config.js",
            },
        },
    },
};
