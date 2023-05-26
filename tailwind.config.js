/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primaryCyan: 'hsl(179, 62%, 43%)',
				brightYellow: 'hsl(71, 73%, 54%)',
				lightGray: 'hsl(204, 43%, 93%)',
				grayishBlue: 'hsl(218, 22%, 67%)',
			},
			fontFamily: {
				sans: ['var(--font-karla)'],
			},
		},
	},
	plugins: [],
}
