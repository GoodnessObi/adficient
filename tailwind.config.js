/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat, sans-serif'],
				Poppins: ['Poppins'],
			},
			colors: {
				primary: '#154ec6',
			},
			backgroundImage: {
				'footer-bg': "url('./images/footer.png')",
			},
		},
	},
	plugins: [],
};
