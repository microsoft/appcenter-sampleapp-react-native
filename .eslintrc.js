const path = require("path");
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
    // any other eslint plugins your team might need/use
  ],
  env: {
    // pick your environments
    browser: true,
    jest: true,
    node: true
  },
  parserOptions: {
    // this can be an array or string (if you only have one tsconfig.json)
    project: [
      // include all of your `tsconfig.json` files in here
      // the example here is taken from portal
      path.resolve(__dirname, "./tsconfig.json"),
      path.resolve(__dirname, "./server/tsconfig.json"),
      path.resolve(__dirname, "./fixtures/tsconfig.json")
    ],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module"
  },
  // for getting help/started on picking rules, a good place to look for
  // a minimal setup that includes only a couple stylistic rules is
  // in the portal's eslintrc.js file
  rules: {
    // ...
  },
  extends: [
    // any other plugins here,
    "prettier",
    "prettier/@typescript-eslint"
  ]
};
