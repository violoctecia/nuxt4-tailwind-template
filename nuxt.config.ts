// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@pinia/nuxt'],

	css: ['~/assets/styles/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/_vars.scss" as *;',
				},
			},
		},
	},

	app: {
		rootId: 'violoctecia',
		buildAssetsDir: '/violoctecia/',
		head: {
			htmlAttrs: { lang: 'ru' },
		},
	},

	experimental: {
		defaults: {
			nuxtLink: {
				externalRelAttribute: 'noopener noreferrer',
				prefetch: false,
				prefetchOn: { interaction: true },
				trailingSlash: 'remove',
			},
		},
	},

	// performance optimizations
	$production: {
		sourcemap: false,
		experimental: {
			payloadExtraction: false, // faster builds
		},

		// production nitro optimizations
		nitro: {
			minify: true,
		},
	},
	hooks: {
		'build:manifest': (manifest) => {
			for (const key in manifest) {
				const file = manifest[key];
				file!.preload = false;
				file!.prefetch = false;
			}
		},
	},
});
