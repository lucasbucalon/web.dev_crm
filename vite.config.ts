import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Pasta onde os arquivos compilados vão ser colocados
    rollupOptions: {
      input: "index.html", // Arquivo de entrada principal
    },
    minify: "esbuild", // Minificação para otimizar o tamanho do bundle
  },
  server: {
    port: 3000, // Porta para o servidor de desenvolvimento
  },
});
