import eslintPluginPrettier from 'eslint-plugin-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': ['error', { endOfLine: 'auto' }],

			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always', // <img />, <br />, <hr />
						normal: 'never', // <div></div>, no <div />
						component: 'always', // <MyComp />
					},
					svg: 'always',
					math: 'always',
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.vue', '**/*.js'],
		rules: {
			'no-console': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',

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
	{
		files: ['components/**/*.vue', 'layouts/**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'error',
		},
	},
);
