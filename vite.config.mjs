import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  outDir: '../../dist',
  build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, './src/index.html'),
      products: resolve(__dirname, './src/products.html'),
      labProducts: resolve(__dirname, './src/lab-products.html'),
      contacts: resolve(__dirname, './src/contacts.html')
    }
  },
  },
  server: {
    host: "127.0.0.1",
    port: '8080'
  }
})