import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node
      } 
    },
  },
  {
    ignores: ["dist/*", "example/**", "tests/**"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
];