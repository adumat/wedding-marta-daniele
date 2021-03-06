module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "standard"
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  globals: {
    "__DEV__": false,
    "jasmine": false,
    "beforeAll": false,
    "afterAll": false,
    "beforeEach": false,
    "afterEach": false,
    "test": false,
    "expect": false,
    "describe": false,
    "jest": false,
    "it": false
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    // "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    // "multiline-ternary": 0,
    "no-undef": 0,
    "quotes": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "space-before-function-paren": 0,
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    "semi": ["error", "always"],
    "react/react-in-jsx-scope": 0
  }
};
