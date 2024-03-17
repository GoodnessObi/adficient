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
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
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
				running_bg: "url('./images/running_bg.png')",
				running_bg_mobile: "url('./images/running_bg_mobile.png')",
				'3Step_bg': "url('./images/picture_on_wall_bg.png')",
				step1_bg: "url('./images/step1img.png')",
				step2_bg: "url('./images/step2img.png')",
				step3_bg: "url('./images/step3img.png')",
				step1_bg_mobile: "url('./images/step1img_mobile.png')",
				step2_bg_mobile: "url('./images/step2img_mobile.png')",
				step3_bg_mobile: "url('./images/step3img_mobile.png')",
			},
		},
	},
	plugins: [],
};
