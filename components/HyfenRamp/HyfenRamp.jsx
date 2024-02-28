import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Link from 'next/link'
import RampModal from './RampModal'
import {
	useAccount,
	useChainId,
	useDisconnect,
	useBalance,
	useEnsName,
	useEnsAvatar,
} from 'wagmi'
import { chainData } from '../../utils/helper'
import { fetcher } from '../../utils/axios'
import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import { SwapComponent } from './Swap'
import { BuyComponent } from './Buy'
import { SellComponent } from './Sell'
import TokenModal from './TokenModal'

export default function HyfenRamp() {
	const router = useRouter()
	const [idrValue, setIdrValue] = useState('')
	const [cryptoValue, setCryptoValue] = useState('')
	const [swapCryptoValue, setSwapCryptoValue] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)
	const { address, isConnected } = useAccount()
	const [currentCategory, setCurrentCategory] = useState(1)
	const [, setAmount] = useState(0)
	// const [, setTo] = useState('')
	// const [, setTxData] = useState('')
	const [, setValueExchanged] = useState(0)
	// const [, setValueExchangedDecimals] = useState(0)
	const [disableSwap, setDisableSwap] = useState(false)
	const [quoteLoading, setQuoteLoading] = useState(false)
	const [toTokenValue, setToTokenValue] = useState(0)
	const [selectedModal, setSelectedModal] = useState('token')
	const [currentSelectedToken, setCurrentSelectedToken] = useState({
		name: 'USDT',
		imgUrl: '/images/usdt.svg',
		native: false,
		decimals: 1e6,
		nickname: 'Tether (USDT)',
		address: 'dac17f958d2ee523a2206206994597c13d831ec7',
		coingecko: 'tether',
	})

	const [currentSelectedCoin, setCurrenctSelectedCoin] = useState({
		name: 'USDT',
		imgUrl: '/images/usdt.svg',
		native: false,
		decimals: 1e6,
		nickname: 'Tether (USDT)',
		address: 'dac17f958d2ee523a2206206994597c13d831ec7',
		coingecko: 'tether',
	})

	const [currentSwappedToken, setCurrentSwappedToken] = useState({
		name: 'USDC',
		imgUrl: '/images/usdc.svg',
		native: false,
		decimals: 1e6,
		nickname: 'Coin (USDC)',
		address: 'A0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
	})

	const { data: etherData } = useBalance({ address })

	const { disconnect } = useDisconnect()

	const chainId = useChainId()

	const currentNative = chainData
		.find((data) => data.chainId === chainId)
		?.tokenData.find((data) => data.native)

	const { data: ensName } = useEnsName({
		address,
	})

	const ensAvatar = useEnsAvatar({
		name: ensName,
	})

	const { data } = useSWR(
		`/markets?vs_currency=idr&ids=${currentSelectedCoin?.coingecko}`,
		fetcher
	)

	// async function get1inchSwap() {
	// 	const tx = await axios.post('https://invoker.cloud/api/handle-swap-old', {
	// 		chainId,
	// 		fromToken: currentSelectedToken?.address,
	// 		toToken: currentSwappedToken?.address,
	// 		amount: amount * currentSelectedToken?.decimals,
	// 		address,
	// 		slippage: 1,
	// 	})
	// 	console.log(tx, '<<< TX')
	// 	console.log(tx.data)
	// 	setTo(tx.data.tx.to)
	// 	setTxData(tx.data.tx.data)
	// 	setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`))
	// 	setValueExchanged(tx.data.toTokenAmount)
	// }

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	useEffect(() => {
		const getData = setTimeout(() => {
			if (Number(swapCryptoValue ?? '0') <= 0) {
				setToTokenValue(0)
			}
			if (Number(swapCryptoValue ?? '0') > 0) {
				setQuoteLoading(true)
				axios
					.post('https://invoker.cloud/api/handle-quote', {
						chainId,
						fromToken: `0x${currentSelectedToken?.address}`,
						toToken: `0x${currentSwappedToken?.address}`,
						amount: Number(swapCryptoValue) * currentSelectedToken?.decimals,
					})
					.then((response) => {
						setDisableSwap(false)
						setQuoteLoading(false)
						const result = response.data
						setToTokenValue(
							(Number(result.toAmount) / currentSwappedToken?.decimals).toFixed(
								2
							)
						)
					})
					.catch((err) => {
						setQuoteLoading(false)
						console.log(err)
					})
			}
		}, 1000)
		return () => clearTimeout(getData)
	}, [swapCryptoValue])

	if (!domLoaded) return <div></div>
	return (
		<div className='overflow-hidden'>
			<RampModal
				currentSelectedToken={currentSelectedToken}
				setCurrentSelectedToken={setCurrentSelectedToken}
				showModal={showModal}
				setShowModal={setShowModal}
				setAmount={setCryptoValue}
				setToTokenValue={setToTokenValue}
				setDisableSwap={setDisableSwap}
				isSelectedToken={selectedModal === 'token'}
				isSwappedToken={selectedModal === 'swapped'}
				currentSwappedToken={currentSwappedToken}
				setCurrentSwappedToken={setCurrentSwappedToken}
			/>
			<TokenModal
				currentSelectedToken={currentSelectedCoin}
				setCurrentSelectedToken={setCurrenctSelectedCoin}
				showModal={showModal}
				setShowModal={setShowModal}
				setAmount={setCryptoValue}
				currentSwappedToken={currentSwappedToken}
				setIdrValue={setIdrValue}
			/>
			<div className='bg-ramp relative md:h-[120vh] w-[100vw]'>
				<div className='pt-[100px] flex md:flex-row flex-col justify-center items-center'>
					<span className='text-center text-ramp-gradient text-[40px] md:text-[48px] font-bold'>
						Buy, sell and swap tokens&nbsp;
					</span>
					<span className='text-center text-[40px] md:text-[48px] font-bold'>
						never made easy
					</span>
				</div>
				{!isConnected ? (
					<div className='flex justify-center items-center mt-2'>
						<w3m-button />
					</div>
				) : (
					<div className='w-full flex justify-center items-center mt-2'>
						<button
							onClick={() => {
								disconnect()
							}}
							className={`flex items-center gap-x-1 'bg-[#333333]' px-4 py-2 bg-blue font-semibold transition duration-500 rounded-[12px] sm:text-lg`}
						>
							<span className='text-gradient-2'>{`${etherData?.formatted.slice(
								0,
								7
							)} ${currentNative?.name} ${
								!ensName
									? address.slice(0, 5) +
									  '...' +
									  address.slice(address.length - 4)
									: ensName
							}`}</span>
							{ensAvatar?.data && (
								<img
									className='w-[30px] h-[30px] rounded-full'
									src={ensAvatar?.data ?? ''}
								/>
							)}
						</button>
					</div>
				)}
				<div className='flex md:flex-row flex-col justify-center items-center md:items-end mt-[20px] md:gap-x-[100px] w-full mx-auto'>
					<div className='relative mt-8 md:block hidden'>
						<Fade top delay={200}>
							<h4 className='font-semibold tracking-wide text-base'>
								Registered and licensed
							</h4>
							<div className='relative mt-4 flex md:justify-start justify-center items-center'>
								<Image
									height={53}
									width={53}
									src={'/images/kominfo.svg'}
									alt='kominfo'
									loading='lazy'
								/>
							</div>
						</Fade>
					</div>
					<div className='bg-ramp-opaque p-[23px] rounded-[12px] mb-[40px] md:mb-0'>
						<div className='flex justify-center'>
							<div className='bg-[#261692] flex justify-center rounded-[8px] p-[4px] gap-x-[12px]'>
								<a
									onClick={() => setCurrentCategory(0)}
									className={`px-[12px] py-[4px] cursor-pointer ${
										currentCategory === 0 && 'bg-[#3D2BBB]'
									} rounded-[6px]`}
								>
									Buy
								</a>
								<a
									onClick={() => setCurrentCategory(1)}
									className={`${
										currentCategory === 1 && 'bg-[#3D2BBB]'
									} px-[12px] py-[4px] cursor-pointer rounded-[6px]`}
								>
									Sell
								</a>
								<a
									onClick={() => setCurrentCategory(2)}
									className={`${
										currentCategory === 2 && 'bg-[#3D2BBB]'
									} px-[12px] py-[4px] cursor-pointer rounded-[6px]`}
								>
									Swap
								</a>
							</div>
						</div>
						{currentCategory === 0 && (
							<BuyComponent
								idrValue={idrValue}
								setIdrValue={setIdrValue}
								setCryptoValue={setCryptoValue}
								setShowModal={setShowModal}
								cryptoValue={cryptoValue}
								currentCategory={currentCategory}
								data={data}
								router={router}
								currentSelectedCoin={currentSelectedCoin}
							/>
						)}
						{currentCategory === 1 && (
							<SellComponent
								idrValue={idrValue}
								setIdrValue={setIdrValue}
								setCryptoValue={setCryptoValue}
								setShowModal={setShowModal}
								cryptoValue={cryptoValue}
								currentCategory={currentCategory}
								data={data}
								router={router}
								currentSelectedCoin={currentSelectedCoin}
							/>
						)}
						{currentCategory === 2 && (
							<SwapComponent
								quoteLoading={quoteLoading}
								cryptoValue={swapCryptoValue}
								setAmount={setAmount}
								setDisableSwap={setDisableSwap}
								setValueExchanged={setValueExchanged}
								setCryptoValue={setSwapCryptoValue}
								setSelectedModal={setSelectedModal}
								setShowModal={setShowModal}
								currentSelectedToken={currentSelectedToken}
								setCurrentSelectedToken={setCurrentSelectedToken}
								setCurrentSwappedToken={setCurrentSwappedToken}
								currentSwappedToken={currentSwappedToken}
								disableSwap={disableSwap}
								router={router}
								toTokenValue={toTokenValue}
								setToTokenValue={setToTokenValue}
							/>
						)}
					</div>
					<div className='block md:hidden bg-[#00000080] w-full py-[40px] px-[24px] gap-y-[16px] flex flex-col'>
						<p className='text-center text-[16px]'>Play games, Earn Money.</p>
						<p className='text-ramp-gradient text-[24px] text-center font-bold'>
							Hyfen Play
						</p>
						<div className='relative flex justify-between items-center gap-4 '>
							{/* Ios */}
							<div className='relative -mb-[0.45rem] -mt-0.5'>
								<Image
									src='/images/App Store.svg'
									height={60}
									width={200}
									quality={100}
									alt='apple-store'
								/>
								<div className='absolute top-0 transition-all duration-300 text-white transform overflow-hidden text-right w-24 md:w-full h-[90%] right-0'>
									<span
										className='bg-app-purple text-right transition-all duration-300 pr-5 md:pr-8 right-1 md:-right-5  w-[7rem] 
											sm:w-[7.4rem] md:w-32 md:top-0 md:absolute'
										style={{
											fontSize: '13px',
											WebkitTransform: 'rotate(45deg)',
											transform: 'rotate(45deg)',
											// width: '135px',
											display: 'block',
										}}
									>
										Soon
									</span>
								</div>
							</div>
							{/* Android */}
							<Link
								legacyBehavior
								passHref
								href='https://play.google.com/store/apps/details?id=com.metabase.gg'
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='relative -mb-[0.45rem]'
								>
									<Image
										src='/images/Google Play.svg'
										height={60}
										width={200}
										alt='android'
									/>
								</a>
							</Link>
						</div>
					</div>
					<div className='block md:hidden bg-easiest-way w-full py-[58px]'>
						<p className='text-[32px] text-ramp-gradient text-center'>
							The easiest way
						</p>
						<p className='text-[32px] text-center'>to play crypto games.</p>
					</div>
					<div className='hidden md:block relative bg-[#000000] rounded-[14px] p-[24px] gap-[16px] flex flex-col'>
						<p className='text-center'>Play games, Earn Money</p>
						<p className='text-ramp-gradient text-[24px] text-center font-bold my-[16px]'>
							Hyfen Play
						</p>
						{/* Ios */}
						<div className='relative -mb-[0.45rem] -mt-0.5'>
							<Image
								src='/images/App Store.svg'
								height={60}
								width={200}
								quality={100}
								alt='apple-store'
							/>
							<div className='absolute top-0 transition-all duration-300 text-white transform overflow-hidden text-right w-24 md:w-full h-[90%] right-0'>
								<span
									className='bg-app-purple text-right transition-all duration-300 pr-5 md:pr-8 right-1 md:-right-5  w-[7rem] 
											sm:w-[7.4rem] md:w-32 md:top-0 md:absolute'
									style={{
										fontSize: '13px',
										WebkitTransform: 'rotate(45deg)',
										transform: 'rotate(45deg)',
										// width: '135px',
										display: 'block',
									}}
								>
									Soon
								</span>
							</div>
						</div>
						<div className='mt-[16px]'></div>
						{/* Android */}
						<Link
							legacyBehavior
							passHref
							href='https://play.google.com/store/apps/details?id=com.metabase.gg'
						>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='relative -mb-[0.45rem]'
							>
								<Image
									src='/images/Google Play.svg'
									height={60}
									width={200}
									alt='android'
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
