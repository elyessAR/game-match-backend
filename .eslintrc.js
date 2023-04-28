module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: { quotes: ["error", "double"], indent: ["error", 2] },
};