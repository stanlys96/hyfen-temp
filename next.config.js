/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/robots.txt',
				destination: '/api/robots',
			},
		]
	},
	env: {
		BASE_URL: process.env.BASE_URL,
	},
})
