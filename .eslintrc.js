module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    'plugin:eslint-plugin-eslint-comments'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    window: true,
    module: true
  }
};
