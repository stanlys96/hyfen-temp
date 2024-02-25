module.exports = {
	locales: ['en', 'id'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
		'/': ['home'],
		'/players': ['players'],
		'/guilds': ['home', 'guilds'],
		'/404': ['404'],
		'/community': ['community'],
		'/about': ['about'],
		'/contact': ['contact'],
		'/hyfen-play': ['hyfen-play'],
		'/hyfen-tools': ['hyfen-tools'],
		'/hyfen-pay': ['hyfen-pay'],
		'/privacy-policy': ['privacy-policy'],
		'/terms-and-conditions': ['terms-and-conditions'],
		'/hyfen-ramp': ['hyfen-ramp'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./locales/${lang}/${ns}.json`).then((m) => m.default),

	// You can use a dynamic import, fetch, whatever. You should
	// return a Promise with the JSON file.
}
