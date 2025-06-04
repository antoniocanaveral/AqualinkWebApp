import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { theme } from './src/config/theme/themeVariables';
import million from 'million/compiler';
export default defineConfig({
  server: {
    port: 3000, // 👈 aquí cambias el puerto
  },
  base: '/aqualinkdemo/',
  plugins: [million.vite({auto: true}), react()],
  resolve: {
    alias: {
      'styled-components': 'styled-components/dist/styled-components.esm.js',
      path: false,
    },
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { ...theme },
        javascriptEnabled: true,
      },
    },
  },
  esbuild: {
    loader: 'jsx',
  },
 
});

