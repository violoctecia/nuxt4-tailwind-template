import prettierPlugin from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.vue', '**/*.js'],
		rules: {
			'no-console': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'error',

			'vue/no-multiple-template-root': 'off',
			'vue/attributes-order': 'off',
			'vue/no-undef-components': [
				'error',
				{
					ignorePatterns: [
						'^Nuxt', // NuxtPage, NuxtLayout, NuxtLink...
						'^ClientOnly$',
					],
				},
			],
		},
	},
);
