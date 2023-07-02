import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => {
	return {
		plugins: [
			react(),
			federation({
				name: 'remote_button',
				filename: 'remoteEntryButton.js',
				exposes: {
					'./Button': './src/Button',
				},
				shared: ['react', 'react-dom'],
			}),
		],
		server: {
			port: 5001,
			strictPort: true,
			open: true,
		},
		build: {
			modulePreload: false,
			target: 'esnext',
			minify: false,
			cssCodeSplit: false,
		},
		preview: {
			port: 5001,
			strictPort: true,
			open: true,
		},
	};
});
