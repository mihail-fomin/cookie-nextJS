module.exports = {
	content: [
		"./layout/**/*.{js,ts,jsx,tsx}",

		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mainColor: '#e3a1a5',
				redColor: '#b5363e',
				color300: '#efc8cb',
				color400: '#e9b4b8',
			},
			dropShadow: {
				'xl': '0 8px 5px rgb(181, 54, 62)',
			},
		},
		fontFamily: {
			logo: ['Kaushan Script', 'cursive'],
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Lobster', 'cursive'],
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1028px',
			xl: '1440px',
		}
	},
	plugins: [],
}