module.exports = {
	content: [
		"./layout/**/*.{js,ts,jsx,tsx}",

		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      gridTemplateRows: {
        header: "auto 1fr",
      },

			colors: {
				mainColor: '#e3a1a5',
				redColor: '#b5363e',
				color300: '#efc8cb',
				color400: '#e9b4b8',

				// TODO apply `red` palette
				// red: {
				//    // https://color.adobe.com/create/color-wheel (rotate from hue:0 to hue:350)
        //    50: "#FFF2F4",
        //   100: "#FFE3E8",
        //   200: "#FFCCD5",
        //   300: "#FCA4B3",
        //   400: "#F77288",
        //   500: "#F04360",
        //   600: "#DB2544",
        //   700: "#BA1C36",
        //   800: "#991C30",
        //   900: "#801D2E",
        // },
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