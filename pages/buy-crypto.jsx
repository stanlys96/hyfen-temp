import Head from 'next/head'
import React, { useEffect } from 'react'
import { ArrowRight } from '../components/Icons'
import { useState } from 'react'
import { FormInput } from '../components/molecules/FormInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import ArrowRightBlack from '../components/Icons/ArrowRightBlack'
import { HeaderHyfen } from '../components/HeaderHyfen'
import NetworkModal from '../components/NetworkModal'
import { useSelector } from 'react-redux'
import CurrencyInput from 'react-currency-input-field'
import { formatNumber } from '../utils/helper'
import { useAccount } from 'wagmi'
import useSWR from 'swr'
import { fetcherQuote, quoteAxios } from '../utils/axios'
import { Circles } from 'react-loader-spinner'
import Image from 'next/image'
import PaymentMethodModal from '../components/OnrampPaymentMethodModal'
import { useDispatch } from 'react-redux'
import { setOnrampResult } from '../src/stores/user-slice'

export default function BuyCrypto() {
	const dispatch = useDispatch()
	const router = useRouter()
	const { address } = useAccount()
	const [selectedOption, setSelectedOption] = useState('input')
	const [showModal, setShowModal] = useState(false)
	const [cryptoValue, setCryptoValue] = useState('')
	const { currentSelectedOnrampCoin } = useSelector((state) => state.user)
	const [paymentModal, setPaymentModal] = useState(false)

	const [paymentMethod, setPaymentMethod] = useState({
		name: 'Virtual Account Mandiri',
		code: 'virtual_account_mandiri',
		group: 'virtual_account',
		currency: 'IDR',
		image: '/img/mandiri.png',
		isActive: true,
		flatFeeAmount: 2000,
		percentFeeAmount: 0,
		id: '65ae07a34bbef2a538a672e4',
	})

	const {
		values,
		errors,
		handleBlur,
		handleChange,
		setFieldValue,
		handleSubmit,
	} = useFormik({
		initialValues: {
			address: '',
			phoneNumber: '',
			idrValue: currentSelectedOnrampCoin?.idrValue,
		},
		validationSchema: yup.object({
			idrValue: yup.string().required('IDR value is required'),
			address: yup.string().required('Address is required'),
			phoneNumber: yup.string().required('Phone Number is required'),
		}),
		onSubmit: async (values) => {
			try {
				const data = await quoteAxios.post('/onramp', {
					receiverWalletAddress: address,
					acceptanceMethod: paymentMethod?.code,
					inputAmount: parseInt(values?.idrValue ?? '0'),
					paymentPhoneNumber: values.phoneNumber,
					inputCurrency: 'IDR',
					outputCurrency: currentSelectedOnrampCoin?.id,
					reason: 'Onramp',
					description: 'Create onramp',
					withLimit: false,
				})
				open(data?.data?.data?.acceptanceDetail?.frontend_url, '_blank')
				dispatch(
					setOnrampResult({
						address,
						network: currentSelectedOnrampCoin?.network,
						cryptoValue: data?.data?.data?.outputAmountExact?.toFixed(2),
						idrValue: values?.idrValue,
						bankName: paymentMethod?.name,
						bankLogo: paymentMethod?.image,
						cryptoName: currentSelectedOnrampCoin?.cryptoName,
						phoneNumber: values.phoneNumber,
						vaNumber: data?.data?.data?.acceptanceDetail?.va_number,
						group: paymentMethod?.group,
						cryptoImg: currentSelectedOnrampCoin?.logo,
					})
				)
				router.push('/buy-crypto-confirmation')
			} catch (error) {
				console.log(error)
			}
		},
	})
	const { data: quoteData, isLoading } = useSWR(
		`/onramp/quote?amount=${values.idrValue}&inputCurrency=idr&outputCurrency=${currentSelectedOnrampCoin?.id}`,
		fetcherQuote
	)
	const result = quoteData?.data?.data

	useEffect(() => {
		if (result) {
			setCryptoValue(result?.total_received_amount_in_crypto?.toFixed(2))
		} else {
			setCryptoValue('0')
		}
	}, [result])

	useEffect(() => {
		if (selectedOption === 'hyfen') {
			setFieldValue('address', address ?? '')
		}
	}, [address])
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative min-h-[100vh] md:h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen withWallet />
				<NetworkModal showModal={showModal} setShowModal={setShowModal} />
				<PaymentMethodModal
					showModal={paymentModal}
					setShowModal={setPaymentModal}
					setPaymentMethod={setPaymentMethod}
				/>
				<div className='relative h-full max-w-7xl container mx-auto flex md:flex-row flex-col gap-x-5 justify-center items-center h-full pt-[15vh]'>
					{/* Container content */}
					<div className='relative h-full w-fit md:mt-0 flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>Send crypto to</p>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Choose Network*</p>
							<div className='border border-[#FFFFFF4D] cursor-pointer px-[12px] md:w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'>
								<div className='flex gap-x-4 items-center'>
									<Image
										width={30}
										height={30}
										src={`/img/${currentSelectedOnrampCoin?.network}.png`}
										alt={currentSelectedOnrampCoin?.name}
										className='rounded-full'
									/>
									<p className='font-normal text-white'>
										{currentSelectedOnrampCoin?.network?.[0]?.toUpperCase() +
											currentSelectedOnrampCoin?.network?.slice(1)}{' '}
										Network
									</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
							{/* <div className='flex justify-between mt-4'>
								<p className='text-[#FFFFFF4D] text-[14px]'>
									Estimated gas fee
								</p>
								<div className='flex gap-x-2'>
									<p className='text-[#FFFFFF4D] text-[14px]'>≈$100</p>
									<p className='text-white text-[14px]'>~0.01 RON</p>
								</div>
							</div> */}
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Wallet Address*</p>
							<form className='flex gap-x-4 mt-2'>
								<div className='radio'>
									<label className='text-white flex gap-x-2 items-center'>
										<input
											onChange={() => {
												setSelectedOption('input')
												setFieldValue('address', '')
											}}
											type='radio'
											value='option1'
											checked={selectedOption === 'input'}
										/>
										<span>Input custom address</span>
									</label>
								</div>
								<div className='radio'>
									<label className='text-white flex gap-x-2 items-center'>
										<input
											onChange={() => {
												setSelectedOption('hyfen')
												setFieldValue('address', address)
											}}
											type='radio'
											value='option2'
											checked={selectedOption === 'hyfen'}
										/>
										<span>Use connected wallet address</span>
									</label>
								</div>
							</form>
							<FormInput
								disabled={selectedOption === 'hyfen'}
								classRoot='mt-5'
								withIcon={false}
								placeholder={'Input address here'}
								// typeForm='email'
								value={values.address}
								onBlur={handleBlur}
								onChange={handleChange}
								name='address'
								required={true}
								isError={errors.address}
								notes={errors.address}
							/>
							<p className='text-white mt-4 text-[20px] text-bold'>
								Payment method
							</p>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Payment method*</p>
							<div
								onClick={() => setPaymentModal(true)}
								className='border border-[#FFFFFF4D] cursor-pointer px-[12px] md:w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'
							>
								<div className='flex gap-x-4 items-center'>
									<Image
										width={30}
										height={30}
										src={paymentMethod?.image}
										alt={currentSelectedOnrampCoin?.name}
										className='rounded-full'
									/>
									<p className='font-normal text-white'>
										{paymentMethod?.name}
									</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>
								Flat Fee Amount:{' '}
								{formatNumber(paymentMethod?.flatFeeAmount ?? '0')} IDR
							</p>
						</div>
					</div>
					<div className='relative h-full flex flex-col md:mt-0 mt-[30px] md:w-[440px] justify-start items-start pb-[100px] md:pb-0'>
						<div className='bg-[#1A1E48] p-[30px] md:w-[440px] rounded-[10px] w-full'>
							<p className='text-white text-[20px] text-bold'>
								Account Information
							</p>
							<FormInput
								classRoot='mt-5'
								label={'Phone Number'}
								placeholder={'Phone Number'}
								typeForm='phone'
								value={values.phoneNumber}
								onBlur={handleBlur}
								onChange={(e) => {
									const typedDigit = e.target.value
									const numbers = [
										'0',
										'1',
										'2',
										'3',
										'4',
										'5',
										'6',
										'7',
										'8',
										'9',
									]
									if (
										!numbers.includes(typedDigit[typedDigit.length - 1]) &&
										typedDigit.length > 0
									)
										return
									setFieldValue('phoneNumber', typedDigit)
								}}
								name='phoneNumber'
								required={true}
								type='phoneNumber'
								isError={errors.phoneNumber}
								notes={errors.phoneNumber}
							/>
							<p className='text-white mt-5 text-[20px] text-bold'>
								Buy Crypto Breakdown
							</p>
							<div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>You will receive</p>
									<p className='text-white'>
										{formatNumber(cryptoValue ?? '0')}{' '}
										{currentSelectedOnrampCoin?.cryptoName}
									</p>
								</div>
								<div className='flex justify-between items-center mt-4'>
									<p className='text-white flex-1'>You pay</p>
									<CurrencyInput
										id='input-example'
										name='input-name'
										placeholder='0'
										value={values.idrValue}
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
											setFieldValue('idrValue', value)
										}}
										className={`relative p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize disabled:opacity-60`}
									/>
								</div>
								<div className='flex justify-between mt-7'>
									<p className='text-white text-[20px]'>Total Payment</p>
									<p className='text-white text-[20px]'>
										{formatNumber(values?.idrValue ?? '0')} IDR
									</p>
								</div>
							</div>
							<div className='mt-[30px] flex justify-center items-center'>
								<a
									onClick={async () => {
										if (isLoading || parseFloat(values.idrValue ?? '0') < 50000)
											return
										handleSubmit()

										// if (quoteLoading || disableSwap) return
										// console.log(sendTransaction)
										// sendTransaction()
									}}
									className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 ${
										isLoading || parseFloat(values.idrValue ?? '0') < 50000
											? 'bg-[#888888] header__download-button-disabled'
											: 'bg-white header__download-button'
									} py-3 px-11 inline-block text-base font-bold ${
										isLoading || parseFloat(values.idrValue ?? '0') < 50000
											? 'cursor-not-allowed'
											: 'cursor-pointer'
									}`}
								>
									{isLoading ? (
										<Circles
											height='30'
											width='30'
											radius='2'
											color='green'
											ariaLabel='loading'
										/>
									) : (
										<div className='flex items-center h-[30px]'>
											<span>
												{parseFloat(values.idrValue ?? '0') < 50000
													? 'Minimum 50,000 IDR'
													: 'Confirm'}
											</span>
											<ArrowRightBlack />
										</div>
									)}
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
