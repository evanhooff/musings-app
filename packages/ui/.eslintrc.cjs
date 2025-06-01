/** @type {import("@repo/eslint-config").Linter.Config} */
import * as eslintConfigWeb from "@repo/eslint-config/web"; // Import the web.mjs file

const eslintConfig = [
  ...eslintConfigWeb, // Use the imported configuration
];

export default eslintConfig;
