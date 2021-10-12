module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			blue: '#353044',
			white: '#fffefd',
			black: '#111113',
			grey: '#eae9ee'
		}),
		textColor: {
			blue: '#353044',
			white: '#fffefd',
			black: '#111113',
			grey: '#eae9ee'
		},
		fontFamily: {
			lato: ['Lato, sans-serif'],
			lora: ['Lora, serif']
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
