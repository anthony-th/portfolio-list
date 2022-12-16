import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PUBLIC_URL = process.env.PUBLIC_URL || '';
// https://vitejs.dev/config/
export default defineConfig({
  base: `${PUBLIC_URL}/portfolio-list/`,
  plugins: [react()]
});
