import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import baseConfig from "./base.js";

const config = [
  ...baseConfig,
  reactPlugin.configs.flat?.recommended ?? {},
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...(reactHooks.configs.recommended?.rules ?? {}),
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];

export default config;
