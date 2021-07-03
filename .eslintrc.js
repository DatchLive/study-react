module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "next"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: [],
  rules: {
    semi: "error",
    quotes: "error",
    "react/prop-types": "off",
    "no-undef": "error",
  },
};
