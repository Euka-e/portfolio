/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		borderRadius: {
			DEFAULT: '0',
			none: '0',
		},
		screens: {
			sm: '550px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				bg: '#060612',
				'bg-elevated': '#0a0a18',
				ink: '#f8fafc',
				'ink-2': 'rgba(248,250,252,0.68)',
				'ink-3': 'rgba(248,250,252,0.5)',
				'ink-4': 'rgba(248,250,252,0.35)',
				accent: '#22d3ee',
				'accent-violet': '#8b5cf6',
				hairline: 'rgba(255,255,255,0.10)',
				'hairline-strong': 'rgba(255,255,255,0.14)',
				'hairline-soft': 'rgba(255,255,255,0.07)',
				'grid-line': 'rgba(255,255,255,0.045)',
			},
			fontFamily: {
				sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['Geist Mono', 'ui-monospace', 'monospace'],
			},
			fontSize: {
				h1: ['clamp(40px, 6.4vw, 92px)', { fontWeight: '600', letterSpacing: '-0.045em', lineHeight: '0.96' }],
				h2: ['clamp(26px, 3.4vw, 44px)', { fontWeight: '500', letterSpacing: '-0.04em', lineHeight: '1.05' }],
				'h2-statement': ['clamp(30px, 4.6vw, 60px)', { fontWeight: '500', letterSpacing: '-0.045em', lineHeight: '1.02' }],
				metric: ['clamp(44px, 5vw, 68px)', { fontWeight: '500', letterSpacing: '-0.05em', lineHeight: '1' }],
				'h3-role': ['clamp(20px, 2vw, 27px)', { fontWeight: '500', letterSpacing: '-0.03em', lineHeight: '1.1' }],
				'h3-project': ['clamp(22px, 2.6vw, 34px)', { fontWeight: '500', letterSpacing: '-0.035em', lineHeight: '1.2' }],
				'h3-ai': ['18px', { fontWeight: '500', letterSpacing: '-0.02em' }],
				'body-hero': ['clamp(15px, 1.35vw, 17px)', { lineHeight: '1.68' }],
				'body': ['15px', { lineHeight: '1.7' }],
				'body-compact': ['14px', { lineHeight: '1.6' }],
				eyebrow: ['11px', { letterSpacing: '0.1em' }],
				btn: ['12px', { letterSpacing: '0.14em' }],
				logo: ['12px', { letterSpacing: '0.18em' }],
			},
		},
	},
	plugins: [],
}
