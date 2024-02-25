module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			screens: {
				DEFAULT: '1200px',
			},
			padding: {
				DEFAULT: '20px',
				md: '40px',
				xl: '20px',
			},
		},
		extend: {
			backgroundColor: ['even', 'odd'],
			fontFamily: {
				sans: "'DM Sans', sans-serif",
			},
			fontSize: {
				heading1: ['28px', '48px'],
				heading2: ['20px', '24px'],
				heading3: ['16px', '14px'],
				desc1: ['16px', '20px'],
				xxs: ['10px', '13px'],
				xs: ['12px', '16px'],
				sm: ['14px', '18px'],
				base: ['16px', '21px'],
				lg: ['20px', '26px'],
				xl: ['24px', '31px'],
				'2xl': ['32px', '42px'],
				'3xl': ['36px', '47px'],
				'4xl': ['42px', '55px'],
				'5xl': ['55px', '72px'],
				'6xl': ['80px', '100px'],
				'7xl': ['108px', '120px'],
				40: ['40px', '52px'],
			},
			spacing: {
				25: '6.5rem',
				4.5: '1.125rem',
				5.5: '1.327rem',
			},
			colors: {
				app: {
					primary: '#3c45a5',
					blue: '#26DFF8',
					purple: '#BB42F8',
					cyan: '#17AFF0',
					bg_app: '#13163A',
					bg_primary: '#333B96',
					bg_secondary: '#13163A',
					background: '#13163A',
					red: '#FF3F3F',
					disabled: '#9CA3AF',
					shade: '#43466D',
				},
				transparent: 'transparent',
				current: 'currentColor',
				hover: '#1dfaff',
				black: {
					100: '#000',
					200: '#0C111C',
					300: '#111827',
					400: '#0a0b1f',
				},
				white: '#fff',
				gray: {
					DEFAULT: '#969696',
					200: '#A0A3A9',
				},
				blue: {
					DEFAULT: '#0ED5DA',
				},
				purple: {
					100: 'rgba(65, 23, 84, 0.3) 0%',
					300: 'rgba(65, 23, 84, 0.3) 100%',
				},
				flex: {
					2: '1 0 100%',
				},
				opacity: {
					0.6: '#ffffff99',
					0.3: '#ffffff4d',
				},
				dark: 'rgba(255, 255, 255, 0.3)',
				redts: '#FF3F3F',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
