module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // ... other extends
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "no-var": "error",
    "brace-style": "error",
    "prefer-template": "error",
    "no-irregular-whitespace": "error",
    "no-dupe-keys ": "error",
    radix: "error",
    "space-before-blocks": "error",
    "import/prefer-default-export": "off",
    "react/no-typos": "warn",
    "react/prop-types": "warn",
    "react/button-has-type": "error",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        printWidth: 100,
      },
    ],
  },
};
