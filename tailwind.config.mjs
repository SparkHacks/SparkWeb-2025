/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textColor: {
				DEFAULT: '#FFFFFF'
			},
			fontSize: {
				DEFAULT: '1rem'
			},
			colors: {
				headerTopBlue: '#193C5A',
				headerBotBlue: '#17558B',
				waterBlue: '#438392',
			}
		},
	},
	plugins: [],
}
