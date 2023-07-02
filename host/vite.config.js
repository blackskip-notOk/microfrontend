import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  appType: 'spa',
  clearScreen: false,
	plugins: [
    react(),
    svgr(),
		federation({
      name: 'host_app',
      remotes: {
        remoteButton: 'http://localhost:5001/assets/remoteEntryButton.js',
      },
			shared: ['react', 'react-dom'],
		}),
	],
  server: {
    open: true,
    port: 5000,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
