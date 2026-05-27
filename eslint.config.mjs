import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


export default defineConfig([
  {
    languageOptions: 
    { 
      globals: {...globals.browser, ...globals.node} 
  }
  },
  { files: ["**/*.{js,mjs,cjs}"], 
  plugins: { js }, 
  extends: ["js/recommended"], 
   },
   {
      files: ["**/*.test.js"],
      ...jest.configs["flat/recommended"],
      rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/expect-expect": "error",
   },
]);
