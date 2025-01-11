/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
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
