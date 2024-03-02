import { ToastContainer } from 'react-toastify'
import BlankLayout from '../components/Layouts/BlankLayout'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { WagmiProvider } from 'wagmi'
// import { arbitrum, bsc, optimism, polygon, mainnet } from 'viem/chains'
import { arbitrum, mainnet, bsc, polygon, optimism } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { metaMask, injected, walletConnect } from 'wagmi/connectors'
import { createWeb3Modal } from '@web3modal/wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi'
import { Provider } from 'react-redux'
import { store } from '../src/stores/store'

const queryClient = new QueryClient()

// const GOERLI_RPC_URL = process.env.NEXT_PUBLIC_GOERLI_RPC_URL
// const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL
// const BSC_RPC_URL = process.env.NEXT_PUBLIC_BSC_RPC_URL
// const OPTIMISM_RPC_URL = process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL
// const ARBITRUM_RPC_URL = process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL
// const POLYGON_RPC_URL = process.env.NEXT_PUBLIC_POLYGON_RPC_URL
// const BASE_RPC_URL = process.env.NEXT_PUBLIC_BASE_RPC_URL
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

// const rpcUrlHelper = [
// 	{
// 		chainId: 1,
// 		rpcUrl: MAINNET_RPC_URL,
// 	},
// 	{
// 		chainId: 137,
// 		rpcUrl: POLYGON_RPC_URL,
// 	},
// 	{
// 		chainId: 42161,
// 		rpcUrl: ARBITRUM_RPC_URL,
// 	},
// 	// {
// 	//   chainId: 59144,
// 	//   rpcUrl: LINEA_RPC_URL,
// 	// },
// 	{
// 		chainId: 10,
// 		rpcUrl: OPTIMISM_RPC_URL,
// 	},
// 	{
// 		chainId: 8453,
// 		rpcUrl: BASE_RPC_URL,
// 	},
// 	{
// 		chainId: 56,
// 		rpcUrl: BSC_RPC_URL,
// 	},
// 	{
// 		chainId: 5,
// 		rpcUrl: GOERLI_RPC_URL,
// 	},
// ]

// const config = createConfig({
// 	chains: [mainnet, bsc, optimism, arbitrum, polygon],
// 	transports: {
// 		[mainnet.id]: http(MAINNET_RPC_URL),
// 		[bsc.id]: http(BSC_RPC_URL),
// 		[optimism.id]: http(OPTIMISM_RPC_URL),
// 		[arbitrum.id]: http(ARBITRUM_RPC_URL),
// 		[polygon.id]: http(POLYGON_RPC_URL),
// 	},
// 	connectors: [
// 		injected(),
// 		walletConnect({ projectId: PROJECT_ID }),
// 		metaMask(),
// 		// safe(),
// 	],
// })

const metadata = {
	name: 'Hyfen',
	description: 'Hyfen',
	url: 'https://hyfen.gg', // origin must match your domain & subdomain
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet, arbitrum, optimism, polygon, bsc]
const config = defaultWagmiConfig({
	chains,
	projectId: PROJECT_ID,
	metadata,
	enableWalletConnect: true, // Optional - true by default
	enableInjected: true, // Optional - true by default
	enableEIP6963: true, // Optional - true by default
	enableCoinbase: true, // Optional - true by default
})

createWeb3Modal({
	wagmiConfig: config,
	projectId: PROJECT_ID,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
})

function MyApp({ Component, pageProps }) {
	const addJsonLd = () => {
		return {
			__html: `
		  {
			"@context": "https://schema.org",
			"@type": "ClaimReview",
			"url": "https://www.hyfen.gg/hyfen-play",
			"claimReviewed": "Play Games, Earn Money.",
			"itemReviewed": {
			  "@type": "Claim",
			  "author": {
				"@type": "Organization",
				"name": "hyfen",
				"sameAs": "https://www.hyfen.gg/"
			  },
			  "datePublished": "2023-06-12",
			  "appearance": {
				"@type": "OpinionNewsArticle",
				"url": "https://www.hyfen.gg/hyfen-pay",
				"headline": "Hyfen Pay Allow your users to buy and sell crypto using fiat.",
				"datePublished": "2023-06-12",
				"author": {
				  "@type": "Person",
				  "name": "hyfen"
				},
				"image": "https://www.hyfen.gg/_next/image?url=%2Fimages%2Fhome%2Fhome-bg-img.png&w=1920&q=75",
				"publisher": {
				  "@type": "Organization",
				  "name": "The easiest way to play crypto games.",
				  "logo": {
					"@type": "ImageObject",
					"url": "https://www.hyfen.gg/images/hyfen-logo.svg"
				  }
				}
			  }
			},
			"author": {
			  "@type": "Organization",
			  "name": "hyfen"
			},
			"reviewRating": {
			  "@type": "Rating",
			  "ratingValue": "1",
			  "bestRating": "5",
			  "worstRating": "1",
			  "alternateName": "False"
			}
		  }
		`,
		}
	}

	const addJsonFaq = () => {
		return {
			__html: `
			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"mainEntity": [{
				  "@type": "Question",
				  "name": "Can you earn money from hyfen?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "<p>Yes, it's possible to get paid for playing video games. One of the most lucrative opportunities to make money playing games is being a popular streamer or content creator, but you don't need millions of fans to start making money.</p><p>A web app for guilds and managers that want to earn passive income by lending out their game items (NFT) to players. <a href=https://www.hyfen.gg/hyfen-play </a> Play Games,Earn Money.</p>"
				  }
				}, {
				  "@type": "Question",
				  "name": "What is play-to-earn crypto?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "Play-to-earn (P2E) is a blockchain gaming mechanic where players earn crypto tokens as rewards for; completing tasks, winning battles against other players, or progressing through levels within a game. These rewards can be native cryptocurrencies like MANA from Decentraland, NFT assets — skins, cards, characters, etc."
				  }
				}, {
				  "@type": "Question",
				  "name": "Which crypto game is free?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "<p>Gods Unchained review is one of the most popular free crypto games currently. It is an online digital card game all based on NFTs. Players can collect, trade, battle, buy and sell cards on the Ethereum blockchain. It has impressive graphics and very detailed gameplay with great depth.</p><p><a href=https://www.hyfen.gg/>Play Games,Earn Money.</a> Step into the new world of gaming, where everyone can have the opportunity to game and gain..</p>"
				  }
				}, {
				  "@type": "Question",
				  "name": "Is Axie Infinity still profitable 2023?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "The market was extremely volatile, and the risk-to-rewards ratio was also unfavorable. The year 2023 has been slightly better for crypto investors as the market has been recovering. However, the recovery of Axie Infinity was very short-term, and the prices have again reached the lows of 2022."
				  }
				}, {
				  "@type": "Question",
				  "name": "Is playing NFT games profitable?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text":"NFTs from NFT games have a marketable value, and one can profit by selling them. <ul><li>Play</li><li>Games</li><li>Earn Money</li></ul>"}
				  }]
			  }
			`,
		}
	}

	const Layout = Component.Layout || BlankLayout
	return (
		<>
			<Head>
				<title>Make money playing blockchain games</title>
				<title>
					Can you earn money from playing games? - Frequently Asked
					Questions(FAQ)
				</title>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />

				<meta
					name='google-site-verification'
					content='mVszz2-mmGwWyDhkCadd5hADpUOs5VbtrFWRpSZbCK4'
				/>
				<meta
					name='google-site-verification'
					content='6gh6MuLQ6YYR-BDvTIyJutD86QkjCU295Cn3N4iyUPA'
				/>
				<link
					rel='apple-touch-icon'
					sizes='57x57'
					href='/favicon/apple-icon-57x57.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='60x60'
					href='/favicon/apple-icon-60x60.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='72x72'
					href='/favicon/apple-icon-72x72.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href='/favicon/apple-icon-76x76.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='114x114'
					href='/favicon/apple-icon-114x114.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='/favicon/apple-icon-120x120.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='144x144'
					href='/favicon/apple-icon-144x144.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/favicon/apple-icon-152x152.png'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-icon-180x180.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/favicon/android-icon-192x192.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/favicon/favicon-96x96.png'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>

				<link rel='manifest' href='/manifest.json' />

				<meta name='msapplication-TileColor' content='#ffffff' />

				<meta
					name='msapplication-TileImage'
					content='/favicon/ms-icon-144x144.png'
				/>

				<meta name='theme-color' content='#ffffff'></meta>
			</Head>

			{/* SEO  */}
			<Script
				id='analytic'
				type='application/ld+json'
				dangerouslySetInnerHTML={addJsonLd()}
				key='item-jsonld'
			/>

			{/* SEO  */}
			<Script
				id='analytic-faq'
				type='application/ld+json'
				dangerouslySetInnerHTML={addJsonFaq()}
				key='item-faq-jsonld'
			/>

			{/* Google Analytics */}
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-5X8GZ4NKFN'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-5X8GZ4NKFN', {
					page_path: window.location.pathname,
					});`,
				}}
			/>
			<Script
				async
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-VF14GL84KB'
			/>

			<Script
				id='google-analytics-2'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){
				dataLayer.push(arguments);
				}
				gtag('js', new Date());
			
				gtag('config', 'G-VF14GL84KB');
				`,
				}}
			/>

			{/* End Google Analytic */}
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<Layout>
						<Provider store={store}>
							<Component {...pageProps} />
							<ToastContainer />
						</Provider>
					</Layout>
				</QueryClientProvider>
			</WagmiProvider>
		</>
	)
}

export default MyApp
