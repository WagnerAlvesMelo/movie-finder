module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest": true,
    "node": true
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project:  ['./tsconfig.json']
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off"
  },
};
