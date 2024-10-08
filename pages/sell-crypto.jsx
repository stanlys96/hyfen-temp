/* eslint no-undef: 0 */
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
import Image from 'next/image'
import Swal from 'sweetalert2'
import { ColorRing } from 'react-loader-spinner'
import CurrencyInput from 'react-currency-input-field'
import useSWR from 'swr'
import { quoteAxios, fetcherQuote } from '../utils/axios'
import { useSelector } from 'react-redux'
import {
	useAccount,
	useWriteContract,
	useWaitForTransactionReceipt,
} from 'wagmi'
import { useDispatch } from 'react-redux'
import { setOfframpResult } from '../src/stores/user-slice'
import PaymentMethodModal from '../components/OnrampPaymentMethodModal'
import { formatNumber } from '../utils/helper'
import RecipientModal from '../components/RecipientModal'
import { onrampPaymentMethod } from '../utils/helper'
import { Circles } from 'react-loader-spinner'

export default function BuyCrypto() {
	const dispatch = useDispatch()
	const router = useRouter()
	const [paymentModal, setPaymentModal] = useState(false)
	const [recipientModal, setRecipientModal] = useState(false)
	const [currentRecipient, setCurrentRecipient] = useState({})
	const [selectedOption, setSelectedOption] = useState('input')
	const { data: paymentData } = useSWR(
		`/reference/banks?limit=1000`,
		fetcherQuote
	)

	const paymentResult = paymentData?.data?.data

	const [paymentMethod, setPaymentMethod] = useState(
		paymentResult?.docs?.find((data) => data.name === 'BANK CENTRAL ASIA')
	)
	const [isCheckingBankAccount] = useState(false)
	const [tokenLoading] = useState(false)
	const { currentSelectedCoin, currentUser, currentSelectedOfframpCoin } =
		useSelector((state) => state.user)
	const { address } = useAccount()
	const { isPending: isPendingApproval, data: approvalHash } =
		useWriteContract()

	const { isLoading: approvalLoading } = useWaitForTransactionReceipt({
		hash: approvalHash,
	})

	const { isPending: isPendingCoin } = useWriteContract()

	// const { data: tokenAllowance } = useReadContract({
	// 	address: `0x${currentSelectedCoin?.contractAddress}`,
	// 	abi: erc20Abi,
	// 	functionName: 'allowance',
	// 	args: [address, `0x${currentChain?.seamlessContract}`],
	// })

	// const needApproval =
	// 	parseFloat(sellValue) >
	// 	parseFloat(
	// 		tokenAllowance?.toString() / parseFloat(currentSelectedCoin?.decimals)
	// 	)

	const {
		values,
		errors,
		handleBlur,
		handleChange,
		setFieldValue,
		handleSubmit,
		isValid,
	} = useFormik({
		initialValues: {
			email: '',
			accountNumber: '',
			cryptoValue: currentSelectedOfframpCoin?.cryptoValue,
			idrValue: '',
			walletAddress: '',
		},
		validationSchema: yup.object({
			cryptoValue: yup.string().required('Crypto value is required'),
			idrValue: yup.string().required('IDR value is required'),
			walletAddress: yup.string().required('Wallet address value is required'),
		}),
		onSubmit: async (values) => {
			try {
				const offrampData = await quoteAxios.post('/offramp', {
					inputAmount: values.cryptoValue,
					senderName: currentUser?.full_name,
					walletAddress: values.walletAddress,
					senderEmail: currentRecipient?.email,
					receiverId: currentRecipient?.id,
					inputCurrency: currentSelectedOfframpCoin?.id,
					outputCurrency: currentSelectedOfframpCoin?.currency,
				})
				if (offrampData.status === 200) {
					dispatch(setOfframpResult(offrampData?.data?.data))
					router.push('/offramp-result')
				}
			} catch (error) {
				console.log(error)
			}
		},
	})

	const { data: recipientData, mutate: recipientMutate } = useSWR(
		`/recipient`,
		fetcherQuote
	)

	const recipientResult = recipientData?.data?.data?.docs

	const { data: quoteData, isLoading } = useSWR(
		`/offramp/quote?amount=${parseFloat(
			values.cryptoValue ?? '0'
		)}&inputCurrency=${currentSelectedOfframpCoin?.id}&outputCurrency=${
			currentSelectedOfframpCoin?.currency
		}`,
		fetcherQuote
	)

	const result = quoteData?.data?.data

	const waitApproval =
		isPendingApproval || approvalLoading || isPendingCoin || tokenLoading

	useEffect(() => {
		if (result) {
			setFieldValue('idrValue', result?.amount_in_currency?.toFixed(2))
		} else {
			setFieldValue('idrValue', '0')
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
			<main className='relative h-[120vh] h-full pb-[200px] w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen withWallet isLoading={waitApproval} />
				<PaymentMethodModal
					showModal={paymentModal}
					setShowModal={setPaymentModal}
					setPaymentMethod={setPaymentMethod}
					paymentResult={paymentResult?.docs?.filter(
						(data) => data.currency === 'IDR'
					)}
				/>
				<RecipientModal
					showModal={recipientModal}
					setShowModal={setRecipientModal}
					setPaymentMethod={setCurrentRecipient}
					listResult={recipientResult}
				/>
				<div className='relative h-full w-full container mx-auto flex md:flex-row flex-col gap-y-5 gap-x-10 justify-center items-center h-full pt-[13vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-[20px] text-white font-bold'>Add Recipient</p>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>
								Choose Payment Method*
							</p>
							<div
								onClick={() => {
									if (waitApproval) return
									setPaymentModal(true)
								}}
								className='border border-[#FFFFFF4D] cursor-pointer px-[12px] md:w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'
							>
								<div className='flex gap-x-4 items-center'>
									<Image
										width={30}
										height={30}
										alt='provider'
										src={'/img/idr.svg'}
										className='w-8 h-8 rounded-full'
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
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Account Number*</p>
							<div className='flex gap-x-2 mt-2'>
								<FormInput
									disabled={waitApproval}
									classRoot='flex-1'
									placeholder={'Input Account Number'}
									typeForm='phone'
									value={values.accountNumber}
									onBlur={handleBlur}
									onChange={(e) => {
										const re = /^[0-9]?[0-9]*$/
										if (re.test(e.target.value)) {
											setFieldValue('accountNumber', e.target.value)
										}
									}}
									name='accountNumber'
									required={true}
									isError={errors.accountNumber}
									notes={errors.accountNumber}
								/>
							</div>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Email Address*</p>
							<FormInput
								disabled={waitApproval}
								placeholder={'Email Address'}
								classRoot='flex-1 mt-2'
								typeForm='email'
								value={values.email}
								onBlur={handleBlur}
								onChange={handleChange}
								name='email'
								required={true}
								type='email'
								isError={errors.email}
								notes={errors.email}
							/>
							<div className='mt-5 flex justify-center items-center'>
								<a
									onClick={async () => {
										try {
											const emailValidation = RegExp(
												/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
											)
											if (!emailValidation.test(values.email)) {
												return Swal.fire('Invalid email format', '', 'info')
											}
											if (!values.email || !values.accountNumber) {
												return Swal.fire(
													'Please fill in account number & email address',
													'',
													'info'
												)
											}
											console.log(paymentMethod, '<<< PAYMENT METHOD')
											const recipientData = {
												name: !currentUser?.name
													? values.email
													: currentUser?.name,
												email: values.email,
												recipientType: 'Individual',
												city: 'Indonesia',
												address: 'Indonesia',
												postCode: '60221',
												bank: {
													currency: currentSelectedOfframpCoin?.currency,
													country: currentSelectedOfframpCoin?.country,
													accountNumber:
														values.accountNumber[0] === '0'
															? parseInt('62' + values.accountNumber.slice(1))
															: values.accountNumber,
													paymentCode: paymentMethod?.paymentCode,
													bankName: paymentMethod?.name,
													accountName: !currentUser?.name
														? values.email
														: currentUser?.name,
												},
											}
											await quoteAxios.post('/recipient', recipientData)
											Swal.fire(
												'Success!',
												'Successfully added a recipient',
												'success'
											)
											setFieldValue('email', '')
											setFieldValue('accountNumber', '')
											recipientMutate()
										} catch (e) {
											console.log(e)
										}
									}}
									className={`w-fit flex gap-x-[12px] justify-start items-start text-center text-slate-900 bg-white header__download-button py-3 px-11 inline-block text-base font-bold cursor-pointer`}
								>
									{isCheckingBankAccount ? (
										<ColorRing
											visible={true}
											height='30'
											width='30'
											ariaLabel='blocks-loading'
											wrapperStyle={{}}
											wrapperClass='blocks-wrapper'
											colors={[
												'#e15b64',
												'#f47e60',
												'#f8b26a',
												'#abbd81',
												'#849b87',
											]}
										/>
									) : (
										<div className='flex items-center h-[30px]'>
											<span>Add Recipient</span>
											<ArrowRightBlack />
										</div>
									)}
								</a>
							</div>
						</div>
					</div>
					<div className='relative h-full  flex flex-col justify-start items-start'>
						<div className='bg-[#1A1E48] p-[30px] w-fit rounded-[10px]'>
							<p className='text-[#9CA3AF] text-[16px]'>Choose Recipient*</p>
							<div
								onClick={() => {
									if (waitApproval) return
									setRecipientModal(true)
								}}
								className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-full rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'
							>
								{currentRecipient?.name ? (
									<div className='flex justify-between items-center w-full'>
										<div className='flex gap-x-4 items-center'>
											<Image
												width={30}
												height={30}
												alt='provider'
												src={
													onrampPaymentMethod?.find(
														(data) =>
															data.code === currentRecipient?.paymentCode
													)?.image
												}
												className='w-8 h-8 rounded-full'
											/>
											<div className='flex flex-col'>
												<p className='font-normal text-white'>
													{currentRecipient?.bankName}
												</p>
												<p className='font-normal text-[13px] text-[#9CA3AF]'>
													{currentRecipient?.accountNumber}
												</p>
											</div>
										</div>

										<ArrowRight className='fill-current h-4 ' />
									</div>
								) : (
									<p className='text-white'>Select recipient...</p>
								)}
							</div>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>
								Wallet Address That Sends The Crypto*
							</p>
							<form className='flex gap-x-4 mt-2'>
								<div className='radio'>
									<label className='text-white flex gap-x-2 items-center'>
										<input
											onChange={() => {
												setSelectedOption('input')
												setFieldValue('walletAddress', '')
											}}
											type='radio'
											value='option1'
											checked={selectedOption === 'input'}
										/>
										<span className='text-[13px]'>Input custom address</span>
									</label>
								</div>
								<div className='radio'>
									<label className='text-white flex gap-x-2 items-center'>
										<input
											onChange={() => {
												setSelectedOption('hyfen')
												setFieldValue('walletAddress', address)
											}}
											type='radio'
											value='option2'
											checked={selectedOption === 'hyfen'}
										/>
										<span className='text-[13px]'>
											Use connected wallet address
										</span>
									</label>
								</div>
							</form>
							<FormInput
								disabled={selectedOption === 'hyfen'}
								classRoot='mt-5'
								withIcon={false}
								placeholder={'Input wallet address here'}
								// typeForm='email'
								value={values.walletAddress}
								onBlur={handleBlur}
								onChange={handleChange}
								name='walletAddress'
								required={true}
								isError={errors.walletAddress}
								notes={errors.walletAddress}
							/>
							<div className='flex justify-between items-center mt-5'>
								<p className='text-white text-[14px] md:text-[20px] text-bold'>
									Sell Crypto Breakdown
								</p>
							</div>
							<div className='flex justify-between items-center mt-5'>
								<p className='text-white'>
									{currentSelectedOfframpCoin?.network?.[0]?.toUpperCase() +
										currentSelectedOfframpCoin?.network?.slice(1)}{' '}
									Network
								</p>
								<Image
									className='rounded-full'
									width={50}
									height={50}
									src={`/img/${currentSelectedOfframpCoin?.network}.${
										currentSelectedOfframpCoin?.network?.toLowerCase() ===
										'stellar'
											? 'png'
											: 'svg'
									}`}
								/>
							</div>
							<div>
								<div className='flex justify-between items-center gap-x-3 mt-4'>
									<p className='text-white md:text-[16px] text-[12px]'>
										You sell
									</p>
									<CurrencyInput
										placeholder='0'
										defaultValue={parseFloat(
											currentSelectedCoin?.cryptoValue ?? '0'
										)}
										decimalsLimit={6}
										value={values.cryptoValue}
										onValueChange={(value) => {
											setFieldValue('cryptoValue', value)
										}}
										className='relative p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize disabled:opacity-60'
									/>
									<p className='text-white'>
										{currentSelectedOfframpCoin?.cryptoName}
									</p>
								</div>
								<div className='flex justify-between items-center gap-x-3 mt-4'>
									<p className='text-white md:text-[16px] text-[12px]'>
										You will receive
									</p>
									<CurrencyInput
										disabled
										placeholder='0'
										decimalsLimit={6}
										value={values.idrValue}
										className='relative p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize disabled:opacity-60'
									/>
									<p className='text-white'>IDR</p>
								</div>

								{/* <div className='flex justify-between mt-4'>
									<p className='text-white'>Tax & Services</p>
									<p className='text-white'>10 SLP</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white font-bold'>
										Gas Fee (make sure it is sufficient)
									</p>
									<p className='text-white font-bold'>0,01 RON</p>
								</div> */}
								<div className='flex justify-between mt-7 items-center'>
									<p className='text-white text-[20px]'>Total Payment</p>
									<div className='flex gap-x-2'>
										<p className='text-white text-[20px]'>
											{values.cryptoValue}{' '}
											{currentSelectedOfframpCoin?.cryptoName}
										</p>
										<Image
											src={currentSelectedOfframpCoin?.logo}
											width={30}
											height={30}
										/>
									</div>
								</div>
							</div>
							<div className='mt-[30px] flex justify-center items-center'>
								<a
									onClick={async () => {
										if (isLoading || parseFloat(values.idrValue ?? '0') < 50000)
											return
										if (!currentRecipient?.name) {
											return Swal.fire('Please fill in a recipient', '', 'info')
										}
										handleSubmit()

										// if (quoteLoading || disableSwap) return
										// console.log(sendTransaction)
										// sendTransaction()
									}}
									className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 ${
										!currentRecipient?.name ||
										!isValid ||
										isLoading ||
										parseFloat(values.idrValue ?? '0') < 50000
											? 'bg-[#888888] header__download-button-disabled'
											: 'bg-white header__download-button'
									} py-3 px-11 inline-block text-base font-bold ${
										!currentRecipient?.name ||
										!isValid ||
										isLoading ||
										parseFloat(values.idrValue ?? '0') < 50000
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
