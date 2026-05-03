import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//
// IMPORTANT — GitHub Pages base path:
// • For a USER site (repo named `<your-username>.github.io`): set base: '/'
// • For a PROJECT site (repo named anything else, e.g. `portfolio`): set base: '/<repo-name>/'
// • The default './' below uses RELATIVE paths and works for either, but breaks if you ever
//   add client-side routing. Adjust if you switch to react-router.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
