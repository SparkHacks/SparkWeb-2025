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
			},
			keyframes: {
				'bob': {
					'0%': 'translate: 0 0',
					'20%': 'translate: 0 -8px',
					'55%': 'translate: 0 5px;',
					'80%': 'translate: 0 -1px',
					'100%': 'translate: 0 0;'
				},
				'sway': {
					'0%': 'rotate: 0deg;',
					'33%': 'rotate: 5deg;',
					'70%': 'rotate: -5deg;'
				}
			},
			animation: {
				'bob-sway-slow': 'bob 20s ease-out 0s infinite, sway 15s ease-in-out 1s infinite',
				'bob-sway-med': 'bob 10s ease-out 1s infinite, sway 4s ease-in-out 0s infinite',
				'bob-sway-fast': 'bob 8s ease-out 1s infinite, sway 3s ease-in-out 0s infinite',
				'bob-slow': 'bob 20s ease-out 0s infinite',
				'bob-med': 'bob 10s ease-out 1s infinite',
				'bob-fast': 'bob 5s ease-out 1s infinite',
				'sway-slow': 'sway 15s ease-in-out 1s infinite',
				'sway-med': 'sway 4s ease-in-out 0s infinite',
				'sway-fast': 'sway 3s ease-in-out 0s infinite',
			}
		},
	},
	plugins: [],
}
