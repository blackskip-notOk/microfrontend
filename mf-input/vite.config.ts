import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
	plugins: [
		react(),
		lightningcss(),
		federation({
			name: 'input',
			filename: 'remoteEntry.js',
			exposes: {
				'./Input': './src/Input.tsx',
			},
			shared: ['react', 'react-dom'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
		cssMinify: 'lightningcss',
	},
	server: {
		port: 6002,
		strictPort: true,
		open: true,
	},
  preview: {
    port: 6002,
		strictPort: true,
		open: true,
  }
});
