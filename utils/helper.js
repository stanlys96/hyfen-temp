import {
	arbitrum,
	base,
	bsc,
	goerli,
	optimism,
	polygon,
	mainnet,
	aurora,
	arbitrumGoerli,
	optimismGoerli,
	polygonMumbai,
	bscTestnet,
} from 'viem/chains'

export const formatNumber = (n) => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const numberTexts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const ethTokenData = {
	id: 1,
	name: 'ETH',
	imgUrl: '/images/eth.svg',
	coingecko: 'ethereum',
	nickname: 'Ethereum',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const daiTokenData = {
	id: 2,
	name: 'DAI',
	imgUrl: '/images/dai.svg',
	coingecko: 'dai',
	nickname: 'Dai',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const usdcTokenData = {
	id: 3,
	name: 'USDC',
	imgUrl: '/images/usdc.svg',
	coingecko: 'usd-coin',
	nickname: 'Coin (USDC)',
	native: false,
	decimals: 1e6,
	decimalValue: 6,
}

export const usdtTokenData = {
	id: 4,
	name: 'USDT',
	imgUrl: '/images/usdt.svg',
	coingecko: 'tether',
	nickname: 'Tether (USDT)',
	native: false,
	decimals: 1e6,
	decimalValue: 6,
}

export const wbtcTokenData = {
	id: 5,
	name: 'WBTC',
	imgUrl: '/images/wbtc.svg',
	coingecko: 'wrapped-bitcoin',
	nickname: 'Wrapped (BTC)',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const wethTokenData = {
	id: 6,
	name: 'WETH',
	imgUrl: '/images/weth.svg',
	coingecko: 'weth',
	nickname: 'Wrapped (ETH)',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const maticTokenData = {
	id: 7,
	name: 'MATIC',
	imgUrl: '/images/matic.svg',
	coingecko: 'matic-network',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const bnbTokenData = {
	id: 8,
	name: 'BNB',
	imgUrl: '/images/bnb.svg',
	coingecko: 'binancecoin',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const maviaTokenData = {
	id: 9,
	name: 'MAVIA',
	imgUrl: '/images/mavia.png',
	coingecko: 'heroes-of-mavia',
	nickname: 'Mavia (MAVIA)',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const pixelsTokenData = {
	id: 10,
	name: 'PIXEL',
	imgUrl: '/images/pixel.png',
	coingecko: 'pixels',
	nickname: 'Pixels (PIXEL)',
	native: false,
	decimals: 1e18,
	decimalValue: 18,
}

export const supportedChains = [
	mainnet.id,
	// Goerli.chainId,
	optimism.id,
	bsc.id,
	arbitrum.id,
	polygon.id,
	// ArbitrumGoerli.chainId,
	// OptimismGoerli.chainId,
	// Mumbai.chainId,
	// BSCTestnet.chainId,
	// aurora.id,
	// Base.chainId,
	// 59114,
]

const ethereumSeamlessContract =
	process.env.NEXT_PUBLIC_ETHEREUM_CUSTOM_CONTRACT
const polygonSeamlessContract = process.env.NEXT_PUBLIC_POLYGON_CUSTOM_CONTRACT
const goerliSeamlessContract = process.env.NEXT_PUBLIC_GOERLI_CUSTOM_CONTRACT
const arbitrumSeamlessContract =
	process.env.NEXT_PUBLIC_ARBITRUM_CUSTOM_CONTRACT
const binanceSeamlessContract = process.env.NEXT_PUBLIC_BINANCE_CUSTOM_CONTRACT
const baseSeamlessContract = process.env.NEXT_PUBLIC_BASE_CUSTOM_CONTRACT
const lineaSeamlessContract = process.env.NEXT_PUBLIC_LINEA_CUSTOM_CONTRACT
const optimismSeamlessContract =
	process.env.NEXT_PUBLIC_OPTIMISM_CUSTOM_CONTRACT

export const chainData = [
	{
		id: 1,
		chainId: mainnet.id,
		name: 'Ethereum',
		imgUrl: '/images/Ether.svg',
		testNetwork: false,
		transactionUrl: 'https://etherscan.io/tx/',
		seamlessContract: ethereumSeamlessContract,
		tokenData: [
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...daiTokenData,
				contractAddress: '6b175474e89094c44da98b954eedeac495271d0f',
			},
			{
				...usdcTokenData,
				contractAddress: 'A0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			},
			{
				...usdtTokenData,
				contractAddress: 'dac17f958d2ee523a2206206994597c13d831ec7',
			},
			{
				...maviaTokenData,
				contractAddress: '24fcfc492c1393274b6bcd568ac9e225bec93584',
			},
			{
				...pixelsTokenData,
				contractAddress: '3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31',
			},
		],
	},
	{
		id: 2,
		chainId: arbitrum.id,
		name: 'Arbitrum',
		imgUrl: '/images/Arbitrum.svg',
		testNetwork: false,
		transactionUrl: 'https://arbiscan.io/tx/',
		seamlessContract: arbitrumSeamlessContract,
		tokenData: [
			{
				...daiTokenData,
				contractAddress: 'da10009cbd5d07dd0cecc66161fc93d7c9000da1',
			},
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: 'af88d065e77c8cc2239327c5edb3a432268e5831',
			},
			{
				...usdtTokenData,
				contractAddress: 'Fd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
			},
		],
	},
	{
		id: 3,
		chainId: polygon.id,
		name: 'Polygon',
		imgUrl: '/images/Polygon.svg',
		testNetwork: false,
		transactionUrl: 'https://polygonscan.com/tx/',
		seamlessContract: polygonSeamlessContract,
		tokenData: [
			{
				...daiTokenData,
				contractAddress: '8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
			},
			{
				...maticTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: '2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
			},
			{
				...usdtTokenData,
				contractAddress: 'c2132D05D31c914a87C6611C10748AEb04B58e8F',
			},
		],
	},
	{
		id: 4,
		chainId: optimism.id,
		name: 'Optimism',
		imgUrl: '/images/Optimism.svg',
		testNetwork: false,
		transactionUrl: 'https://optimistic.etherscan.io/tx/',
		seamlessContract: optimismSeamlessContract,
		tokenData: [
			{
				...daiTokenData,
				contractAddress: 'DA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
			},
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: '0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
			},
			{
				...usdtTokenData,
				contractAddress: '94b008aa00579c1307b0ef2c499ad98a8ce58e58',
			},
		],
	},
	{
		id: 5,
		chainId: bsc.id,
		name: 'BSC',
		imgUrl: '/images/BSC.svg',
		testNetwork: false,
		transactionUrl: 'https://bscscan.com/tx/',
		seamlessContract: binanceSeamlessContract,
		tokenData: [
			{
				...bnbTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...ethTokenData,
				contractAddress: '2170Ed0880ac9A755fd29B2688956BD959F933F8',
			},
			{
				...daiTokenData,
				contractAddress: '1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
			},
			{
				...usdcTokenData,
				contractAddress: '8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
			},
			{
				...usdtTokenData,
				contractAddress: '55d398326f99059fF775485246999027B3197955',
			},
		],
	},
	{
		id: 6,
		chainId: goerli.id,
		name: 'Goerli',
		imgUrl: '/images/Ether.svg',
		testNetwork: false,
		seamlessContract: goerliSeamlessContract,
		transactionUrl: 'https://goerli.etherscan.io/tx/',
		tokenData: [
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...daiTokenData,
				contractAddress: 'b93cba7013f4557cDFB590fD152d24Ef4063485f',
			},
			{
				...usdcTokenData,
				contractAddress: '0d6B12630Db150559822bb5297227C107332A8bf',
			},
			{
				...usdtTokenData,
				contractAddress: 'fad6367E97217cC51b4cd838Cc086831f81d38C2',
			},
		],
	},
	{
		id: 7,
		chainId: arbitrumGoerli.id,
		testNetwork: true,
		name: 'Arbitrum Goerli',
		imgUrl: '/images/Arbitrum.svg',
		seamlessContract: '',
		tokenData: [
			{
				...daiTokenData,
				contractAddress: 'D5e1E269abF5fb03b10F92b93c7065850144A32A',
			},
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: '2387e295a523347D1E12fB96C052210D49231a2B',
			},
			{
				...usdtTokenData,
				contractAddress: 'B3011837c08D3A447AC1e08CCBAb30caBFC50511',
			},
			{
				...wbtcTokenData,
				contractAddress: 'd38637f7ce85d4468dbe1b523D92f499edf58244',
			},
			{
				...wethTokenData,
				contractAddress: '0b2Bb3D88c61E5734448A42984C3ef6c2e09649E',
			},
		],
	},
	{
		id: 8,
		chainId: optimismGoerli.id,
		name: 'Optimism Goerli',
		imgUrl: '/images/Optimism.svg',
		testNetwork: true,
		seamlessContract: '',
		tokenData: [
			{
				...daiTokenData,
				contractAddress: '4A0eef739Fe45aE318831Fd02ffb609822C89931',
			},
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: 'D1D57Fd32AE51eB778730d4C740E8C041891F525',
			},
			{
				...usdtTokenData,
				contractAddress: '119df4B634d3dE1325c708a10f539D1a14e45874',
			},
			{
				...wbtcTokenData,
				contractAddress: '3491d4649aeBC9f46370DFF87c9887f557fb5954',
			},
			{
				...wethTokenData,
				contractAddress: '329B30e4c9B671ED7fC79AECe9e56215FC40073d',
			},
		],
	},
	{
		id: 9,
		chainId: polygonMumbai.id,
		name: 'Mumbai',
		imgUrl: '/images/Polygon.svg',
		testNetwork: true,
		seamlessContract: '',
		tokenData: [
			{
				...daiTokenData,
				contractAddress: 'F14f9596430931E177469715c591513308244e8F',
			},
			{
				...maticTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...usdcTokenData,
				contractAddress: '65D177ec36cd8aC2e502C640b97662Cf28381915',
			},
			{
				...usdtTokenData,
				contractAddress: 'd28F8b631FAcC1E838FBA8bb84df23DC3480D51A',
			},
			{
				...wbtcTokenData,
				contractAddress: '0d787a4a1548f673ed375445535a6c7A1EE56180',
			},
			{
				...wethTokenData,
				contractAddress: '47cE7E72334Fe164954D4f9dd95f3D20A26e8e2b',
			},
		],
	},
	{
		id: 10,
		chainId: bscTestnet.id,
		name: 'BSC Testnet',
		imgUrl: '/images/BSC.svg',
		testNetwork: true,
		seamlessContract: '',
		tokenData: [
			{
				...bnbTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...ethTokenData,
				contractAddress: '2170ed0880ac9a755fd29b2688956bd959f933f8',
			},
			{
				...daiTokenData,
				contractAddress: 'EC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
			},
			{
				...usdcTokenData,
				contractAddress: '8324F87e66a755C8b1439df09e95DFeA44D9247D',
			},
			{
				...usdtTokenData,
				contractAddress: '337610d27c682E347C9cD60BD4b3b107C9d34dDd',
			},
		],
	},
	{
		id: 11,
		chainId: aurora.id,
		name: 'Aurora',
		imgUrl: '/images/aurora2.png',
		testNetwork: false,
		transactionUrl: 'https://explorer.aurora.dev/tx/',
		seamlessContract: '',
		tokenData: [
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
			{
				...daiTokenData,
				contractAddress: 'e3520349f477a5f6eb06107066048508498a291b',
			},
			{
				...usdcTokenData,
				contractAddress: 'b12bfca5a55806aaf64e99521918a4bf0fc40802',
			},
			{
				...usdtTokenData,
				contractAddress: '4988a896b1227218e4a686fde5eabdcabd91571f',
			},
			{
				...wbtcTokenData,
				contractAddress: 'f4eb217ba2454613b15dbdea6e5f22276410e89e',
			},
			{
				...wethTokenData,
				contractAddress: 'C9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
			},
		],
	},
	{
		id: 12,
		chainId: base.id,
		name: 'Base',
		imgUrl: '/images/base.png',
		testNetwork: false,
		transactionUrl: 'https://basescan.org/tx/',
		seamlessContract: baseSeamlessContract,
		tokenData: [
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
		],
	},
	{
		id: 13,
		chainId: 59114,
		name: 'Linea',
		imgUrl: '/images/base.png',
		testNetwork: false,
		transactionUrl: 'https://lineascan.build/tx/',
		seamlessContract: lineaSeamlessContract,
		tokenData: [
			{
				...ethTokenData,
				native: true,
				contractAddress: 'EeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
			},
		],
	},
]

export const bankTypes = [
	{
		id: 1,
		name: 'Bank',
		imgUrl: '/img/banks/banking.png',
	},
	{
		id: 2,
		name: 'E-Wallet',
		imgUrl: '/img/banks/ewallet.png',
	},
]

export const donationData = [
	{
		id: 1,
		bank_code: 'mandiri',
		bank_account_name: 'LAZISNU',
		bank_account_number: '1230007771910',
	},
]

export const existBankData = [
	'anz',
	'artha',
	'bca',
	'bii',
	'bni',
	'boc',
	'bri',
	'bsm',
	'bumi_arta',
	'capital',
	'cimb',
	'citibank',
	'danamon',
	'dbs',
	'mandiri',
	'muamalat',
	'ocbc',
	'panin',
	'permata',
	'standard_chartered',
	'tokyo',
	'uob',
	'gopay',
	'ovo',
	'linkaja',
	'dana',
	'shopeepay',
]

export const eWallets = ['gopay', 'ovo', 'dana', 'shopeepay', 'linkaja']

export const virtualAccounts = [
	'bni',
	'bri',
	'permata',
	'cimb',
	'mandiri',
	'muamalat',
	'danamon',
]

export const allTokenData = [
	ethTokenData,
	daiTokenData,
	usdcTokenData,
	usdtTokenData,
	wbtcTokenData,
	wethTokenData,
	maticTokenData,
	bnbTokenData,
]

export const faqData = [
	{
		id: 1,
		question: 'What is Seamless Finance?',
		answer: `<br/>Seamless Finance is a bridge from web3 to traditional finance.
                We create a single-click way to fulfill your withdrawal or
                payment needs to Indonesian Rupiah (IDR). These are the things
                you can do with Seamless Finance:
                <br />
                <br /> 1) Withdrawal to bank account, <br />
                2) Topup e-wallet (Gopay, OVO, etc), <br />
                3) Checkout ecommerce (tokopedia, shopee, blibli, etc),
                <br />
                4) Perform a payroll if you’re a DAO with onchain treasury and
                have to pay salary in IDR.
                `,
		open: false,
	},
	{
		id: 2,
		question: 'Ok, any tutorial link to use Seamless?',
		answer: '<br/>Go to this link!',
		open: false,
	},
	{
		id: 3,
		question: 'Does Seamless Finance has a token?',
		answer:
			'<br/>Seamless Finance has not released the token yet. Before our official announcement, any seamless token out there is not related to Seamless Finance.',
		open: false,
	},
	{
		id: 4,
		question: 'Is there any retroactive airdrop plan?',
		answer:
			'<br/>We are thankful to all of the early supporters of Seamless Finance. We plan to give our retroactive appreciation to them. Stay tuned!',
		open: false,
	},
	{
		id: 5,
		question: 'Does Seamless Finance take any fees?',
		answer:
			'<br/>Yes, we are. But easy, you don’t need to worry about hidden fees. The value in the “amount received” is fixed.',
		open: false,
	},
]

export const AVAILABLE_TOKENS = [
	{
		chainId: 1,
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18,
		address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
		logoURI: '/images/eth.svg',
	},
	{
		chainId: 1,
		name: 'Mavia',
		symbol: 'MAVIA',
		decimals: 18,
		address: '0x24fcfc492c1393274b6bcd568ac9e225bec93584',
		logoURI: '/images/mavia.png',
	},
	{
		chainId: 1,
		name: 'USD Coin',
		symbol: 'USDC',
		decimals: 6,
		address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		logoURI: '/images/usdc.svg',
	},
	{
		chainId: 1,
		name: 'Tether USD - PoS',
		symbol: 'USDT',
		decimals: 6,
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		logoURI: '/images/usdt.svg',
	},
	{
		chainId: 1,
		name: 'Pixels',
		symbol: 'PXL',
		decimals: 18,
		address: '0x3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31',
		logoURI: '/images/pixel.png',
	},
]

export const AVAILABLE_TOKENS_BY_SYMBOL = {
	eth: {
		chainId: 1,
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18,
		address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
		logoURI: '/images/eth.svg',
	},
	mavia: {
		chainId: 1,
		name: 'Mavia',
		symbol: 'MAVIA',
		decimals: 18,
		address: '0x24fcfc492c1393274b6bcd568ac9e225bec93584',
		logoURI: '/images/mavia.png',
	},
	usdc: {
		chainId: 1,
		name: 'USD Coin',
		symbol: 'USDC',
		decimals: 6,
		address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		logoURI: '/images/usdc.svg',
	},
	usdt: {
		chainId: 1,
		name: 'Tether USD - PoS',
		symbol: 'USDT',
		decimals: 6,
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		logoURI: '/images/usdt.svg',
	},
	pxl: {
		chainId: 1,
		name: 'Pixels',
		symbol: 'PXL',
		decimals: 18,
		address: '0x3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31',
		logoURI: '/images/pixel.png',
	},
}

export const AVAILABLE_TOKENS_BY_ADDRESS = {
	'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE': {
		chainId: 1,
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18,
		address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
		logoURI: '/images/eth.svg',
	},
	'0x24fcfc492c1393274b6bcd568ac9e225bec93584': {
		chainId: 1,
		name: 'Mavia',
		symbol: 'MAVIA',
		decimals: 18,
		address: '0x24fcfc492c1393274b6bcd568ac9e225bec93584',
		logoURI: '/images/mavia.png',
	},
	'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
		chainId: 1,
		name: 'USD Coin',
		symbol: 'USDC',
		decimals: 6,
		address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		logoURI: '/images/usdc.svg',
	},
	'0x3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31': {
		chainId: 1,
		name: 'Pixels',
		symbol: 'PXL',
		decimals: 18,
		address: '0x3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31',
		logoURI: '/images/pixel.png',
	},
	'0xdac17f958d2ee523a2206206994597c13d831ec7': {
		chainId: 1,
		name: 'Tether USD - PoS',
		symbol: 'USDT',
		decimals: 6,
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		logoURI: '/images/usdt.svg',
	},
}

export const supportedOnrampCoins = [
	{
		_id: '64dae87a6acf6644dd1a3c7d',
		symbol: 'usdt',
		id: 'usdt-ethereum',
		name: 'Tether',
		label: 'USDT - Ethereum',
		address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
		chainId: 1,
		is_native: false,
		logo: '/img/usdt-ethereum.png',
		currencies: ['IDR', 'INR'],
		decimal: 6,
		priceId: 'tether',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'ethereum',
		transactionType: ['offramp'],
	},
	{
		_id: '64dae90c6acf6644dd1a3c81',
		symbol: 'usdc',
		id: 'usdc-ethereum',
		name: 'USDC',
		label: 'USDC - Ethereum',
		address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		chainId: 1,
		is_native: false,
		logo: '/img/usdc-ethereum.png',
		currencies: ['IDR', 'INR', 'THB', 'USD', 'EUR', 'SGD'],
		decimal: 6,
		priceId: 'usd-coin',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'ethereum',
		transactionType: ['offramp'],
	},
	{
		_id: '64dae9016acf6644dd1a3c7f',
		symbol: 'usdt',
		id: 'usdt-polygon',
		name: 'Tether',
		label: 'USDT - Polygon',
		address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
		chainId: 137,
		is_native: false,
		logo: '/img/usdt-ethereum.png',
		currencies: ['IDR', 'INR', 'USD'],
		decimal: 6,
		priceId: 'tether',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'polygon',
		transactionType: ['offramp', 'onramp'],
	},
	{
		_id: '64dae9176acf6644dd1a3c83',
		symbol: 'usdc',
		id: 'usdc-polygon',
		name: 'USDC',
		label: 'USDC - Polygon',
		address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
		chainId: 137,
		is_native: false,
		logo: '/img/usdc-ethereum.png',
		currencies: ['IDR', 'INR', 'THB', 'USD', 'EUR', 'SGD'],
		decimal: 6,
		priceId: 'usd-coin',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'polygon',
		transactionType: ['offramp'],
	},
	{
		_id: '64dae9226acf6644dd1a3c85',
		name: 'matic',
		id: 'matic-polygon',
		symbol: 'matic',
		label: 'MATIC - Polygon',
		address: null,
		chainId: 137,
		is_native: true,
		logo: '/img/matic.png',
		currencies: ['IDR'],
		decimal: 18,
		priceId: 'matic-network',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'polygon',
		transactionType: ['offramp'],
	},
	{
		_id: '6555c07bf4fc0fb38714dcd1',
		name: 'BNB',
		id: 'bnb-bsc',
		symbol: 'bnb',
		label: 'BNB - Binance Smart Chain',
		address: null,
		chainId: 56,
		is_native: true,
		logo: '/img/bnb.png',
		currencies: ['IDR'],
		decimal: 18,
		priceId: 'binancecoin',
		useSmartContract: false,
		blockchainType: 'EVM',
		network: 'bsc',
		transactionType: ['offramp'],
	},
	{
		_id: '656729031a46a342cfb91bf8',
		symbol: 'usdc',
		id: 'usdc-stellar',
		name: 'USDC',
		label: 'USDC - Stellar',
		address: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
		chainId: 0,
		is_native: false,
		logo: '/img/usdc-ethereum.png',
		currencies: ['IDR', 'USD'],
		decimal: 6,
		priceId: 'usd-coin',
		useSmartContract: false,
		blockchainType: 'STELLAR',
		network: 'stellar',
		transactionType: ['offramp', 'onramp'],
	},
]

export const onrampPaymentMethod = [
	{
		name: 'Virtual Account Mandiri',
		code: 'virtual_account_mandiri',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/mandiri.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65ae07a34bbef2a538a672e4',
	},
	{
		name: 'Virtual Account BCA',
		code: 'virtual_account_bca',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/bca.png',
		isActive: false,
		flatFeeAmount: 3000,
		percentFeeAmount: 0,
		id: '65ae36284bbef2a538a672e7',
	},
	{
		name: 'Virtual Account BNI',
		code: 'virtual_account_bni',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/bni.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea4bb4bbef2a538a672e8',
	},
	{
		name: 'Virtual Account Permata',
		code: 'virtual_account_permata',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/permata.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea5284bbef2a538a672e9',
	},
	{
		name: 'Virtual Account Danamon',
		code: 'virtual_account_danamon',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/danamon.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea5454bbef2a538a672ea',
	},
	{
		name: 'Virtual Account BRI',
		code: 'virtual_account_bri',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/bri.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea57e4bbef2a538a672eb',
	},
	{
		name: 'Virtual Account Maybank',
		code: 'virtual_account_maybank',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/maybank.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea5974bbef2a538a672ec',
	},
	{
		name: 'Virtual Account CIMB',
		code: 'virtual_account_cimb',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/cimb.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea5b44bbef2a538a672ed',
	},
	{
		name: 'Virtual Account Hana',
		code: 'virtual_account_hana',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/hana.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea5d64bbef2a538a672ee',
	},
	{
		name: 'Virtual Account MNC Bank',
		code: 'virtual_account_mncbank',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/mnc.png',
		isActive: true,
		flatFeeAmount: 1000,
		percentFeeAmount: 0,
		id: '65aea5f34bbef2a538a672ef',
	},
	{
		name: 'Virtual Account Indomart',
		code: 'virtual_account_indomart',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/alfamart.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea62c4bbef2a538a672f0',
	},
	{
		name: 'Virtual Account Alfamart',
		code: 'virtual_account_alfamart',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/alfamart.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea6424bbef2a538a672f1',
	},
	{
		name: 'Credit Card',
		code: 'credit_card',
		group: 'card',
		currency: 'IDR',
		image: '/img/credit.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 2.5,
		id: '65aea6664bbef2a538a672f2',
	},
	{
		name: 'Debit Card',
		code: 'debit_card',
		group: 'card',
		currency: 'IDR',
		image: '/img/debit.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 2.5,
		id: '65aea6864bbef2a538a672f3',
	},
	{
		name: 'Gopay',
		code: 'gopay',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/gopay.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea6ad4bbef2a538a672f4',
	},
	{
		name: 'OVO',
		code: 'ovo',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/ovo.png',
		isActive: true,
		flatFeeAmount: 500,
		percentFeeAmount: 3,
		id: '65aea6d44bbef2a538a672f5',
	},
	{
		name: 'LinkAja',
		code: 'linkaja',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/linkaja.png',
		isActive: false,
		flatFeeAmount: 3500,
		percentFeeAmount: 0,
		id: '65aea6eb4bbef2a538a672f6',
	},
	{
		name: 'SPIN',
		code: 'spin',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/spinpay.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea6ff4bbef2a538a672f7',
	},
	{
		name: 'BCA Clickpay',
		code: 'bca_clickpay',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/bca_klikpay.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea71e4bbef2a538a672f8',
	},
	{
		name: 'DOKU Wallet',
		code: 'doku_wallet',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/doku.png',
		isActive: false,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65aea73b4bbef2a538a672f9',
	},
	{
		name: 'Shopeepay',
		code: 'shopeepay',
		group: 'ewallet',
		currency: 'IDR',
		image: '/img/shopeepay.png',
		isActive: true,
		flatFeeAmount: 500,
		percentFeeAmount: 2,
		id: '65aea75d4bbef2a538a672fa',
	},
	{
		name: 'QRIS',
		code: 'qris',
		group: 'qris',
		currency: 'IDR',
		image: '/img/qris.png',
		isActive: true,
		flatFeeAmount: 0,
		percentFeeAmount: 0.7,
		id: '65bb9d9ccb94dede99a46f23',
	},
	{
		name: 'Wise',
		code: 'wise',
		group: 'wise',
		currency: 'USD',
		image: '',
		isActive: true,
		flatFeeAmount: 0,
		percentFeeAmount: 0,
		id: '65dc70d4255bc47d39ef6bcd',
	},
	{
		name: 'Bank Transfer',
		code: 'cybrid',
		group: 'bank',
		currency: 'USD',
		image: 'https://cdn.rampable.co/wise.png',
		isActive: false,
		flatFeeAmount: 0,
		percentFeeAmount: 0,
		id: '65e96d00039f0259df022c21',
	},
	{
		name: 'Bank Transfer',
		code: 'transfi',
		group: 'bank',
		currency: 'USD',
		image: 'https://cdn.rampable.co/transfi.png',
		isActive: true,
		flatFeeAmount: 0,
		percentFeeAmount: 0,
		id: '65eb4796a85d415a2ae2a050',
	},
	{
		name: 'Fedwire',
		code: 'fedwire',
		group: 'fedwire',
		currency: 'USD',
		image: 'https://cdn.rampable.co/rampable.png',
		isActive: true,
		flatFeeAmount: 0,
		percentFeeAmount: 0,
		id: '65f7fd752ada6da0fdd55089',
	},
]

export const countryList = [
	{ name: 'Afghanistan', code: 'AF' },
	{ name: 'Åland Islands', code: 'AX' },
	{ name: 'Albania', code: 'AL' },
	{ name: 'Algeria', code: 'DZ' },
	{ name: 'American Samoa', code: 'AS' },
	{ name: 'AndorrA', code: 'AD' },
	{ name: 'Angola', code: 'AO' },
	{ name: 'Anguilla', code: 'AI' },
	{ name: 'Antarctica', code: 'AQ' },
	{ name: 'Antigua and Barbuda', code: 'AG' },
	{ name: 'Argentina', code: 'AR' },
	{ name: 'Armenia', code: 'AM' },
	{ name: 'Aruba', code: 'AW' },
	{ name: 'Australia', code: 'AU' },
	{ name: 'Austria', code: 'AT' },
	{ name: 'Azerbaijan', code: 'AZ' },
	{ name: 'Bahamas', code: 'BS' },
	{ name: 'Bahrain', code: 'BH' },
	{ name: 'Bangladesh', code: 'BD' },
	{ name: 'Barbados', code: 'BB' },
	{ name: 'Belarus', code: 'BY' },
	{ name: 'Belgium', code: 'BE' },
	{ name: 'Belize', code: 'BZ' },
	{ name: 'Benin', code: 'BJ' },
	{ name: 'Bermuda', code: 'BM' },
	{ name: 'Bhutan', code: 'BT' },
	{ name: 'Bolivia', code: 'BO' },
	{ name: 'Bosnia and Herzegovina', code: 'BA' },
	{ name: 'Botswana', code: 'BW' },
	{ name: 'Bouvet Island', code: 'BV' },
	{ name: 'Brazil', code: 'BR' },
	{ name: 'British Indian Ocean Territory', code: 'IO' },
	{ name: 'Brunei Darussalam', code: 'BN' },
	{ name: 'Bulgaria', code: 'BG' },
	{ name: 'Burkina Faso', code: 'BF' },
	{ name: 'Burundi', code: 'BI' },
	{ name: 'Cambodia', code: 'KH' },
	{ name: 'Cameroon', code: 'CM' },
	{ name: 'Canada', code: 'CA' },
	{ name: 'Cape Verde', code: 'CV' },
	{ name: 'Cayman Islands', code: 'KY' },
	{ name: 'Central African Republic', code: 'CF' },
	{ name: 'Chad', code: 'TD' },
	{ name: 'Chile', code: 'CL' },
	{ name: 'China', code: 'CN' },
	{ name: 'Christmas Island', code: 'CX' },
	{ name: 'Cocos (Keeling) Islands', code: 'CC' },
	{ name: 'Colombia', code: 'CO' },
	{ name: 'Comoros', code: 'KM' },
	{ name: 'Congo', code: 'CG' },
	{ name: 'Congo, The Democratic Republic of the', code: 'CD' },
	{ name: 'Cook Islands', code: 'CK' },
	{ name: 'Costa Rica', code: 'CR' },
	{ name: "Cote D'Ivoire", code: 'CI' },
	{ name: 'Croatia', code: 'HR' },
	{ name: 'Cuba', code: 'CU' },
	{ name: 'Cyprus', code: 'CY' },
	{ name: 'Czech Republic', code: 'CZ' },
	{ name: 'Denmark', code: 'DK' },
	{ name: 'Djibouti', code: 'DJ' },
	{ name: 'Dominica', code: 'DM' },
	{ name: 'Dominican Republic', code: 'DO' },
	{ name: 'Ecuador', code: 'EC' },
	{ name: 'Egypt', code: 'EG' },
	{ name: 'El Salvador', code: 'SV' },
	{ name: 'Equatorial Guinea', code: 'GQ' },
	{ name: 'Eritrea', code: 'ER' },
	{ name: 'Estonia', code: 'EE' },
	{ name: 'Ethiopia', code: 'ET' },
	{ name: 'Falkland Islands (Malvinas)', code: 'FK' },
	{ name: 'Faroe Islands', code: 'FO' },
	{ name: 'Fiji', code: 'FJ' },
	{ name: 'Finland', code: 'FI' },
	{ name: 'France', code: 'FR' },
	{ name: 'French Guiana', code: 'GF' },
	{ name: 'French Polynesia', code: 'PF' },
	{ name: 'French Southern Territories', code: 'TF' },
	{ name: 'Gabon', code: 'GA' },
	{ name: 'Gambia', code: 'GM' },
	{ name: 'Georgia', code: 'GE' },
	{ name: 'Germany', code: 'DE' },
	{ name: 'Ghana', code: 'GH' },
	{ name: 'Gibraltar', code: 'GI' },
	{ name: 'Greece', code: 'GR' },
	{ name: 'Greenland', code: 'GL' },
	{ name: 'Grenada', code: 'GD' },
	{ name: 'Guadeloupe', code: 'GP' },
	{ name: 'Guam', code: 'GU' },
	{ name: 'Guatemala', code: 'GT' },
	{ name: 'Guernsey', code: 'GG' },
	{ name: 'Guinea', code: 'GN' },
	{ name: 'Guinea-Bissau', code: 'GW' },
	{ name: 'Guyana', code: 'GY' },
	{ name: 'Haiti', code: 'HT' },
	{ name: 'Heard Island and Mcdonald Islands', code: 'HM' },
	{ name: 'Holy See (Vatican City State)', code: 'VA' },
	{ name: 'Honduras', code: 'HN' },
	{ name: 'Hong Kong', code: 'HK' },
	{ name: 'Hungary', code: 'HU' },
	{ name: 'Iceland', code: 'IS' },
	{ name: 'India', code: 'IN' },
	{ name: 'Indonesia', code: 'ID' },
	{ name: 'Iran, Islamic Republic Of', code: 'IR' },
	{ name: 'Iraq', code: 'IQ' },
	{ name: 'Ireland', code: 'IE' },
	{ name: 'Isle of Man', code: 'IM' },
	{ name: 'Israel', code: 'IL' },
	{ name: 'Italy', code: 'IT' },
	{ name: 'Jamaica', code: 'JM' },
	{ name: 'Japan', code: 'JP' },
	{ name: 'Jersey', code: 'JE' },
	{ name: 'Jordan', code: 'JO' },
	{ name: 'Kazakhstan', code: 'KZ' },
	{ name: 'Kenya', code: 'KE' },
	{ name: 'Kiribati', code: 'KI' },
	{ name: "Korea, Democratic People'S Republic of", code: 'KP' },
	{ name: 'Korea, Republic of', code: 'KR' },
	{ name: 'Kuwait', code: 'KW' },
	{ name: 'Kyrgyzstan', code: 'KG' },
	{ name: "Lao People'S Democratic Republic", code: 'LA' },
	{ name: 'Latvia', code: 'LV' },
	{ name: 'Lebanon', code: 'LB' },
	{ name: 'Lesotho', code: 'LS' },
	{ name: 'Liberia', code: 'LR' },
	{ name: 'Libyan Arab Jamahiriya', code: 'LY' },
	{ name: 'Liechtenstein', code: 'LI' },
	{ name: 'Lithuania', code: 'LT' },
	{ name: 'Luxembourg', code: 'LU' },
	{ name: 'Macao', code: 'MO' },
	{ name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
	{ name: 'Madagascar', code: 'MG' },
	{ name: 'Malawi', code: 'MW' },
	{ name: 'Malaysia', code: 'MY' },
	{ name: 'Maldives', code: 'MV' },
	{ name: 'Mali', code: 'ML' },
	{ name: 'Malta', code: 'MT' },
	{ name: 'Marshall Islands', code: 'MH' },
	{ name: 'Martinique', code: 'MQ' },
	{ name: 'Mauritania', code: 'MR' },
	{ name: 'Mauritius', code: 'MU' },
	{ name: 'Mayotte', code: 'YT' },
	{ name: 'Mexico', code: 'MX' },
	{ name: 'Micronesia, Federated States of', code: 'FM' },
	{ name: 'Moldova, Republic of', code: 'MD' },
	{ name: 'Monaco', code: 'MC' },
	{ name: 'Mongolia', code: 'MN' },
	{ name: 'Montserrat', code: 'MS' },
	{ name: 'Morocco', code: 'MA' },
	{ name: 'Mozambique', code: 'MZ' },
	{ name: 'Myanmar', code: 'MM' },
	{ name: 'Namibia', code: 'NA' },
	{ name: 'Nauru', code: 'NR' },
	{ name: 'Nepal', code: 'NP' },
	{ name: 'Netherlands', code: 'NL' },
	{ name: 'Netherlands Antilles', code: 'AN' },
	{ name: 'New Caledonia', code: 'NC' },
	{ name: 'New Zealand', code: 'NZ' },
	{ name: 'Nicaragua', code: 'NI' },
	{ name: 'Niger', code: 'NE' },
	{ name: 'Nigeria', code: 'NG' },
	{ name: 'Niue', code: 'NU' },
	{ name: 'Norfolk Island', code: 'NF' },
	{ name: 'Northern Mariana Islands', code: 'MP' },
	{ name: 'Norway', code: 'NO' },
	{ name: 'Oman', code: 'OM' },
	{ name: 'Pakistan', code: 'PK' },
	{ name: 'Palau', code: 'PW' },
	{ name: 'Palestinian Territory, Occupied', code: 'PS' },
	{ name: 'Panama', code: 'PA' },
	{ name: 'Papua New Guinea', code: 'PG' },
	{ name: 'Paraguay', code: 'PY' },
	{ name: 'Peru', code: 'PE' },
	{ name: 'Philippines', code: 'PH' },
	{ name: 'Pitcairn', code: 'PN' },
	{ name: 'Poland', code: 'PL' },
	{ name: 'Portugal', code: 'PT' },
	{ name: 'Puerto Rico', code: 'PR' },
	{ name: 'Qatar', code: 'QA' },
	{ name: 'Reunion', code: 'RE' },
	{ name: 'Romania', code: 'RO' },
	{ name: 'Russian Federation', code: 'RU' },
	{ name: 'RWANDA', code: 'RW' },
	{ name: 'Saint Helena', code: 'SH' },
	{ name: 'Saint Kitts and Nevis', code: 'KN' },
	{ name: 'Saint Lucia', code: 'LC' },
	{ name: 'Saint Pierre and Miquelon', code: 'PM' },
	{ name: 'Saint Vincent and the Grenadines', code: 'VC' },
	{ name: 'Samoa', code: 'WS' },
	{ name: 'San Marino', code: 'SM' },
	{ name: 'Sao Tome and Principe', code: 'ST' },
	{ name: 'Saudi Arabia', code: 'SA' },
	{ name: 'Senegal', code: 'SN' },
	{ name: 'Serbia and Montenegro', code: 'CS' },
	{ name: 'Seychelles', code: 'SC' },
	{ name: 'Sierra Leone', code: 'SL' },
	{ name: 'Singapore', code: 'SG' },
	{ name: 'Slovakia', code: 'SK' },
	{ name: 'Slovenia', code: 'SI' },
	{ name: 'Solomon Islands', code: 'SB' },
	{ name: 'Somalia', code: 'SO' },
	{ name: 'South Africa', code: 'ZA' },
	{ name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
	{ name: 'Spain', code: 'ES' },
	{ name: 'Sri Lanka', code: 'LK' },
	{ name: 'Sudan', code: 'SD' },
	{ name: 'Suriname', code: 'SR' },
	{ name: 'Svalbard and Jan Mayen', code: 'SJ' },
	{ name: 'Swaziland', code: 'SZ' },
	{ name: 'Sweden', code: 'SE' },
	{ name: 'Switzerland', code: 'CH' },
	{ name: 'Syrian Arab Republic', code: 'SY' },
	{ name: 'Taiwan, Province of China', code: 'TW' },
	{ name: 'Tajikistan', code: 'TJ' },
	{ name: 'Tanzania, United Republic of', code: 'TZ' },
	{ name: 'Thailand', code: 'TH' },
	{ name: 'Timor-Leste', code: 'TL' },
	{ name: 'Togo', code: 'TG' },
	{ name: 'Tokelau', code: 'TK' },
	{ name: 'Tonga', code: 'TO' },
	{ name: 'Trinidad and Tobago', code: 'TT' },
	{ name: 'Tunisia', code: 'TN' },
	{ name: 'Turkey', code: 'TR' },
	{ name: 'Turkmenistan', code: 'TM' },
	{ name: 'Turks and Caicos Islands', code: 'TC' },
	{ name: 'Tuvalu', code: 'TV' },
	{ name: 'Uganda', code: 'UG' },
	{ name: 'Ukraine', code: 'UA' },
	{ name: 'United Arab Emirates', code: 'AE' },
	{ name: 'United Kingdom', code: 'GB' },
	{ name: 'United States', code: 'US' },
	{ name: 'United States Minor Outlying Islands', code: 'UM' },
	{ name: 'Uruguay', code: 'UY' },
	{ name: 'Uzbekistan', code: 'UZ' },
	{ name: 'Vanuatu', code: 'VU' },
	{ name: 'Venezuela', code: 'VE' },
	{ name: 'Viet Nam', code: 'VN' },
	{ name: 'Virgin Islands, British', code: 'VG' },
	{ name: 'Virgin Islands, U.S.', code: 'VI' },
	{ name: 'Wallis and Futuna', code: 'WF' },
	{ name: 'Western Sahara', code: 'EH' },
	{ name: 'Yemen', code: 'YE' },
	{ name: 'Zambia', code: 'ZM' },
	{ name: 'Zimbabwe', code: 'ZW' },
]
