
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser, 
        
        test: "readonly",
        expect: "readonly",
        page: "readonly",
        browser: "readonly",
        context: "readonly"
       
      }
    } 
  },
]);