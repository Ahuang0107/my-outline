module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  env: {
    browser: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "no-param-reassign": "off",
    "react/function-component-definition": "off",
    "import/extensions": [
      "error",
      {
        js: "never",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
};
