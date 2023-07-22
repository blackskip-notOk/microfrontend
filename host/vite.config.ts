import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { setProxyConfig } from './config/vite/proxyServer';
import { viteAliases } from './config/vite/aliases';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, './config/env', 'HOST_APP_');
	Object.assign(process.env, env);

	process.env.BROWSER = 'arc';

	return {
		base: '/',
		appType: 'spa',
		clearScreen: false,
		css: {
			devSourcemap: true,
			lightningcss: {
					
			},
		},
		logLevel: 'error',
		plugins: [react(), lightningcss()],
		envDir: './config/env',
		envPrefix: 'HOST_APP_',
		server: {
			host: env.HOST_APP_HOST || '0.0.0.0',
			port: Number(env.HOST_APP_PORT),
			strictPort: false,
			open: true,
			proxy: setProxyConfig(mode),
		},
		build: {
			cssMinify: 'lightningcss',
		},
		resolve: {
			alias: viteAliases,
			extensions: ['.ts', '.tsx', '.json'],
		},
	};
});