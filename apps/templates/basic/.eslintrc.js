/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@abroad/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["postcss.config.mjs"],
};
