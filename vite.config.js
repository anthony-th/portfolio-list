import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/portfolio-list/`,
  plugins: [react()],
  define: {
    "process.env.VITE_NAME": `"${process.env.VITE_NAME}"`,
  },
});
