import React, { useState, useEffect } from 'react'
import CurrencyInput from 'react-currency-input-field'
import Image from 'next/image'
import Rupiah from '../Icons/Rupiah'
import ArrowDown from '../Icons/ArrowDown'
import ArrowRightBlack from '../Icons/ArrowRightBlack'
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
	// useSendTransaction,
} from 'wagmi'
import { chainData } from '../../utils/helper'
import { fetcher } from '../../utils/axios'
import useSWR from 'swr'
import axios from 'axios'
import { Circles } from 'react-loader-spinner'
import { useRouter } from 'next/router'

const formatNumber = (n) => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default function HyfenRamp() {
	const router = useRouter()
	const [idrValue, setIdrValue] = useState('')
	const [cryptoValue, setCryptoValue] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)
	const { address, isConnected } = useAccount()
	const [currentCategory, setCurrentCategory] = useState(2)
	const [amount, setAmount] = useState(0)
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
	})

	const [currentSwappedToken, setCurrentSwappedToken] = useState({
		name: 'USDC',
		imgUrl: '/images/usdc.svg',
		native: false,
		decimals: 1e6,
		nickname: 'Coin (USDC)',
		address: 'A0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
	})

	// const { sendTransaction } = useSendTransaction({
	// 	request: {
	// 		from: address,
	// 		to: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
	// 		data: '0x095ea7b30000000000000000000000001111111254eeb25477b68fb85ed929f73a960582000000000000000000000000000000000000000000000000000000174876e800',
	// 		value: 100000000000,
	// 	},
	// })

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

	const { data } = useSWR(`/markets?vs_currency=idr&ids=ethereum`, fetcher)

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
			if (Number(cryptoValue ?? '0') <= 0) {
				setToTokenValue(0)
			}
			if (Number(cryptoValue ?? '0') > 0) {
				console.log(Number(cryptoValue), '<< ??')
				setQuoteLoading(true)
				axios
					.post('https://invoker.cloud/api/handle-quote', {
						chainId,
						fromToken: `0x${currentSelectedToken?.address}`,
						toToken: `0x${currentSwappedToken?.address}`,
						amount: Number(cryptoValue) * currentSelectedToken?.decimals,
					})
					.then((response) => {
						setDisableSwap(false)
						setQuoteLoading(false)
						console.log(response.data)
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
	}, [cryptoValue])

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
						{(currentCategory === 0 || currentCategory === 1) && (
							<div className='flex justify-center items-center'>
								<div className='w-[330px] md:w-[340px] pt-[30px]'>
									<div className='flex flex-col justify-between'>
										<p className='mb-3'>You pay</p>
										<div className='w-full h-[56px] rounded-[11px] px-[12px] bg-[#43466D26] border border-[#FFFFFF4D] flex justify-between items-center'>
											<div className='border-r border-[#FFFFFF4D] h-full'>
												<CurrencyInput
													id='input-example'
													name='input-name'
													placeholder='0'
													value={idrValue}
													defaultValue={0}
													decimalsLimit={6}
													onFocus={undefined}
													onKeyUp={undefined}
													onSubmit={undefined}
													onSubmitCapture={undefined}
													onChangeCapture={undefined}
													transformRawValue={(value) => {
														if (value[value.length - 1] === ',') {
															return value + '.'
														}
														return value
													}}
													onValueChange={(value) => {
														const idrValueFloat = parseFloat(value ?? '0')
														setIdrValue(
															idrValueFloat.toFixed(0) === 'Nan'
																? '0'
																: idrValueFloat.toFixed(0)
														)
														if (data) {
															const crypto = (
																(1 / data.data[0].current_price) *
																idrValueFloat
															).toFixed(6)
															setCryptoValue(crypto === 'NaN' ? '0' : crypto)
														}
													}}
													className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold sm:max-w-full outline-none border-none w-full`}
												/>
											</div>
											<div
												onClick={() => setShowModal(true)}
												className='flex justify-center items-center gap-x-[12px] cursor-pointer'
											>
												<Rupiah />
												<p>IDR</p>
												<ArrowDown className='fill-current h-4 ' />
											</div>
										</div>
										<p className='text-[#FFFFFF4D] italic text-[14px] mt-[10px]'>
											Minimum Deposit: 10,000 IDR
										</p>
										<p className='mb-3 mt-[20px]'>You get</p>
										<div className='w-full h-[56px] rounded-[11px] px-[12px] bg-[#43466D26] border border-[#FFFFFF4D] flex justify-between items-center'>
											<div className='border-r border-[#FFFFFF4D] h-full'>
												<CurrencyInput
													id='input-example'
													name='input-name'
													placeholder='0'
													value={cryptoValue}
													defaultValue={0}
													decimalsLimit={6}
													onFocus={undefined}
													onKeyUp={undefined}
													onSubmit={undefined}
													onSubmitCapture={undefined}
													onChangeCapture={undefined}
													transformRawValue={(value) => {
														if (value[value.length - 1] === ',') {
															return value + '.'
														}
														return value
													}}
													onValueChange={(value) => {
														if (value === cryptoValue) return
														setCryptoValue(value ?? '0')
														if (data) {
															const idr = (
																data.data[0].current_price *
																parseFloat(value ?? '0')
															).toFixed(0)

															setIdrValue(idr === 'NaN' ? '0' : idr)
														}
													}}
													className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold sm:max-w-full outline-none border-none w-full`}
												/>
											</div>
											<div
												onClick={() => setShowModal(true)}
												className='cursor-pointer flex justify-center items-center gap-x-[12px]'
											>
												<Image
													width={30}
													height={30}
													src='/images/slp.png'
													alt='SLP'
												/>
												<p>SLP</p>
												<ArrowDown className='fill-current h-4 ' />
											</div>
										</div>
										<div className='flex justify-between mt-[15px]'>
											<p className='text-[16px]'>Summary:</p>
											<p className='text-[16px]'>Quote updates in 7s</p>
										</div>
										<div className='border border-[#FFFFFF4D] px-[12px] rounded-[11px] h-[56px] flex justify-between items-center mt-[15px]'>
											<p className='font-normal'>
												You get <span className='the-bold'>1000 SLP</span>
											</p>
											<ArrowDown className='fill-current h-4 ' />
										</div>
									</div>
									<div className='mt-[50px]'>
										<a
											onClick={() => router.push('/login')}
											className='w-full flex items-center gap-x-[12px] justify-center header__download-button text-center text-slate-900 bg-white py-3 px-11 inline-block text-base font-bold cursor-pointer'
										>
											<span>Buy Now</span> <ArrowRightBlack />
										</a>
									</div>
								</div>
							</div>
						)}
						{currentCategory === 2 && (
							<div className='flex justify-center items-center'>
								<div className='w-[330px] md:w-[340px] pt-[30px]'>
									<div className='flex flex-col justify-between'>
										<div className='relative'>
											<p className='mb-3'>I want to swap</p>
											<div className='w-full rounded-[11px] p-[12px] bg-[#43466D26] border border-[#FFFFFF4D]'>
												<div className='flex gap-x-2 items-center'>
													<CurrencyInput
														disabled={quoteLoading}
														id='input-example'
														name='input-name'
														placeholder='0'
														value={cryptoValue}
														defaultValue={0}
														decimalsLimit={6}
														onFocus={undefined}
														onKeyUp={undefined}
														onSubmit={undefined}
														onSubmitCapture={undefined}
														onChangeCapture={undefined}
														transformRawValue={(value) => {
															if (value[value.length - 1] === ',') {
																return value + '.'
															}
															return value
														}}
														onValueChange={(value) => {
															if (value === cryptoValue) return
															setAmount(Number(value))
															setDisableSwap(true)
															console.log(amount)
															setValueExchanged(Number(value))
															setCryptoValue(value ?? '0')
															if (data) {
																const idr = (
																	data.data[0].current_price *
																	parseFloat(value ?? '0')
																).toFixed(0)

																setIdrValue(idr === 'NaN' ? '0' : idr)
															}
														}}
														className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold sm:max-w-full outline-none border-none`}
													/>
													<div
														onClick={() => {
															setSelectedModal('token')
															setShowModal(true)
														}}
														className='rounded-[34px] h-[40px] py-[4px] px-[10px] bg-[#474298] cursor-pointer flex justify-center items-center gap-x-2'
													>
														<Image
															width={30}
															height={30}
															src={currentSelectedToken?.imgUrl}
															alt='SLP'
														/>
														<p className='text-ellipsis text-[13px] md:text-[16px]'>
															{currentSelectedToken?.name}
														</p>
														<Image
															width={18}
															height={18}
															src='/images/arrow-down.svg'
															alt='SLP'
														/>
													</div>
												</div>
												<div className='flex justify-between items-center mt-3'>
													<p className='text-[#FFFFFF50] text-[12px]'>≈$100</p>
													<p className='text-[#FFFFFF50] text-[12px]'>
														Ronin Network
													</p>
												</div>
											</div>
											<div
												onClick={() => {
													setCryptoValue(0)
													setToTokenValue(0)
													const selectedTokenTemp = { ...currentSelectedToken }
													const swappedTokenTemp = { ...currentSwappedToken }
													setCurrentSelectedToken(swappedTokenTemp)
													setCurrentSwappedToken(selectedTokenTemp)
												}}
												className='absolute cursor-pointer top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
											>
												<Image
													width={60}
													height={54}
													src='/images/Swap.svg'
													alt='Swap'
												/>
											</div>
											<div className='w-full rounded-[11px] mt-3 p-[12px] bg-[#43466D26] border border-[#FFFFFF4D]'>
												<div className='flex gap-x-2 items-center'>
													<CurrencyInput
														disabled
														id='input-example'
														name='input-name'
														placeholder='0'
														value={toTokenValue}
														defaultValue={0}
														decimalsLimit={6}
														onFocus={undefined}
														onKeyUp={undefined}
														onSubmit={undefined}
														onSubmitCapture={undefined}
														onChangeCapture={undefined}
														transformRawValue={(value) => {
															if (value[value.length - 1] === ',') {
																return value + '.'
															}
															return value
														}}
														onValueChange={(value) => {
															if (value === cryptoValue) return
															setCryptoValue(value ?? '0')
															if (data) {
																const idr = (
																	data.data[0].current_price *
																	parseFloat(value ?? '0')
																).toFixed(0)

																setIdrValue(idr === 'NaN' ? '0' : idr)
															}
														}}
														className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold outline-none border-none`}
													/>
													<div
														onClick={() => {
															setSelectedModal('swapped')
															setShowModal(true)
														}}
														className='rounded-[34px] h-[40px] py-[4px] px-[10px] bg-[#474298] cursor-pointer w-full flex justify-center items-center gap-x-2'
													>
														<Image
															width={30}
															height={30}
															src={currentSwappedToken?.imgUrl}
															alt='SLP'
														/>
														<p className='text-ellipsis text-[13px] md:text-[16px]'>
															{currentSwappedToken?.name}
														</p>
														<Image
															width={18}
															height={18}
															src='/images/arrow-down.svg'
															alt='SLP'
														/>
													</div>
												</div>
												<div className='flex justify-between items-center mt-3'>
													<p className='text-[#FFFFFF50] text-[12px]'>&nbsp;</p>
													<p className='text-[#FFFFFF50] text-[12px]'>
														Ronin Network
													</p>
												</div>
											</div>
										</div>
										<div className='flex justify-between mt-[15px]'>
											<p className='text-[16px]'>Summary:</p>
											<p className='text-[16px]'>Quote updates in 7s</p>
										</div>
										<div className='border border-[#FFFFFF4D] px-[12px] rounded-[11px] h-[56px] flex justify-between items-center mt-[15px]'>
											<p className='font-normal'>
												Swap {cryptoValue} {currentSelectedToken?.name} for{' '}
												{formatNumber(toTokenValue)} {currentSwappedToken?.name}
											</p>
											<ArrowDown className='fill-current h-4 ' />
										</div>
									</div>
									<div className='mt-[50px] flex justify-center items-center'>
										<a
											onClick={async () => {
												router.push('/login')
												return
												// if (quoteLoading || disableSwap) return
												// console.log(sendTransaction)
												// sendTransaction()
											}}
											className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 ${
												disableSwap
													? 'bg-[#888888] header__download-button-disabled'
													: 'bg-white header__download-button'
											} py-3 px-11 inline-block text-base font-bold ${
												quoteLoading || disableSwap
													? 'cursor-not-allowed'
													: 'cursor-pointer'
											}`}
										>
											{!quoteLoading ? (
												<div className='flex items-center h-[30px]'>
													<span>Swap Now</span>
													<ArrowRightBlack />
												</div>
											) : (
												<Circles
													height='30'
													width='30'
													radius='2'
													color='green'
													ariaLabel='loading'
												/>
											)}
										</a>
									</div>
								</div>
							</div>
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
