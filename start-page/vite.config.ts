import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'startPage',
			filename: 'remoteEntry.js',
			exposes: {
				'./StartPage': './src/StartPage.tsx',
			},
			remotes: {
				remoteInput: 'http://localhost:6002/assets/remoteEntry.js',
			},
			shared: ['react', 'react-dom'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
	server: {
		port: 6001,
		strictPort: true,
		open: true,
	},
	preview: {
		port: 6001,
		strictPort: true,
		open: true,
	},
});
