module.exports = {
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
};
