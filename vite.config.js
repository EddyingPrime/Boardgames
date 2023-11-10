import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy: {
  //     '/api' : 'http://localhost:5174'
  //   }
  // }
  plugins: [react()],
});
