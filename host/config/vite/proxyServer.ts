import type { ProxyOptions } from 'vite';
import { loadEnv } from 'vite';

export function setProxyConfig(mode: string) {
	const env = loadEnv(mode, '../env', 'HOST_APP_');

	const api_host = env.HOST_APP_HOST;
	const api_port = env.HOST_APP_SERVER_PORT;
	const api_path = `http://${api_host}:${api_port}`;

	const proxyOptions = {
		target: api_path,
		changeOrigin: true,
		secure: false,
	};

	const proxyConfig: Record<string, ProxyOptions> = {
		'^/api/.*': proxyOptions,
		'^/js/.*': proxyOptions,
		'^/css/.*': proxyOptions,
		'^/font/.*': proxyOptions,
	};

	return proxyConfig;
}
