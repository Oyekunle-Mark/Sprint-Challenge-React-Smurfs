module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "quotes": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "function-paren-newline": 0,
    "react/jsx-filename-extension": 0,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
