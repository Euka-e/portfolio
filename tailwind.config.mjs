/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '550px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				lightblue: '#87CEEB',
				yellow: '#F7DC6F',
				glass: {
					bg: 'rgba(255,255,255,0.03)',
					border: 'rgba(255,255,255,0.08)',
				},
				accent: {
					purple: '#8b5cf6',
					cyan: '#06b6d4',
					glow: '#8b5cf620',
				},
			},
			boxShadow: {
				glow: '0 0 20px rgba(139, 92, 246, 0.4)',
				'glow-lg': '0 0 30px rgba(139, 92, 246, 0.35)',
			},
			backgroundImage: {
				'accent-gradient': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
			},
		},
	},
	plugins: [],
}
