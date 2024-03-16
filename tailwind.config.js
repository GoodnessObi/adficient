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
				'faq-bg': "url('./images/bg_curved2.png')",
				'bedroom-bg': "url('./images/bedroom_bg.png')",
				'livingroom-bg': "url('./images/livingroom_bg.png')",
				'stools-bg': "url('./images/blurred-blue-stools.png')",
				'gym-bg': "url('./images/gym_bg.png')",
				'main-bg': "url('./images/bg_curved1.png')",
				'hero-bg': "url('./images/hero_bg.png')",
			},
		},
	},
	plugins: [],
};
