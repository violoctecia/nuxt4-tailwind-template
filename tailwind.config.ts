/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: '#D97706',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
		},
		screens: {
			md: '640px',
			xl: '1200px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				lg: '0',
			},
			screens: {
				lg: '1000px',
			},
		},
	},
	plugins: [],
};
