/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly HOST_APP_HOST: 'localhost';
	readonly HOST_APP_PORT: '7777';
	readonly HOST_APP_SERVER_PORT: '3333';
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
