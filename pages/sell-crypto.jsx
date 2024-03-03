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
import PaymentMethodModal from '../components/PaymentMethodModal'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { ColorRing } from 'react-loader-spinner'
import CurrencyInput from 'react-currency-input-field'
import useSWR from 'swr'
import { fetcher, axiosApi, axiosSecondary } from 'utils/axios'
import { useSelector } from 'react-redux'
import { chainData } from 'utils/helper'
import {
	useBalance,
	useAccount,
	useWriteContract,
	useWaitForTransactionReceipt,
	useSendTransaction,
} from 'wagmi'
import erc20Abi from '../contracts/erc20-abi.json'
// import seamlessAbi from '../contracts/seamless-abi.json'
import { parseEther } from 'viem'
import { useDispatch } from 'react-redux'
import { setSelectedCoin } from 'src/stores/user-slice'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export default function BuyCrypto() {
	const dispatch = useDispatch()
	const router = useRouter()
	const [showModal, setShowModal] = useState(false)
	const [selectedProvider, setSelectedProvider] = useState({
		name: 'GoPay',
		code: 'gopay',
		imgUrl: '/img/banks/gopay.png',
	})
	const { sendTransactionAsync } = useSendTransaction()
	const [accountName, setAccountName] = useState('ACCOUNT NAME')
	const [isCheckingBankAccount, setIsCheckingBankAccount] = useState(false)
	const [tokenLoading, setTokenLoading] = useState(false)

	const { currentSelectedCoin } = useSelector((state) => state.user)
	const [receiveValue, setReceiveValue] = useState('')
	const [sellValue, setSellValue] = useState(
		currentSelectedCoin?.cryptoValue ?? '0'
	)
	const { address, chainId } = useAccount()
	const currentChain = chainData.find((data) => data.chainId === chainId)

	const {
		isPending: isPendingApproval,
		writeContractAsync: writeApprovalContract,
		data: approvalHash,
	} = useWriteContract()

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

	const nativeBalance = useBalance({ address })
	const tokenBalance = useBalance({
		address,
		token: `0x${
			currentSelectedCoin?.contractAddress ??
			'dac17f958d2ee523a2206206994597c13d831ec7'
		}`,
	})

	const usedBalance = currentSelectedCoin?.native
		? parseFloat(nativeBalance?.data?.formatted)
		: parseFloat(tokenBalance?.data?.formatted)

	const insufficientBalance = parseFloat(sellValue ?? '0') > usedBalance

	let periodCheckBank = 0
	const checkBankInquiry = async () => {
		const getBankAccount = await axiosSecondary.post('/inquiry', {
			account_number: values.accountNumber,
			bank_code: selectedProvider.code.toLowerCase(),
		})
		if (getBankAccount.data.status !== 'PENDING') {
			return getBankAccount
		}
		if (periodCheckBank >= 20000) {
			return {
				data: {
					status: 'TIME_OUT',
					account_holder: '',
				},
			}
		}
		await delay(2500)
		periodCheckBank += 2500
		return checkBankInquiry()
	}
	const { values, errors, handleBlur, handleChange, setFieldValue } = useFormik(
		{
			initialValues: {
				email: '',
				accountNumber: '',
			},
			validationSchema: yup.object({
				accountNumber: yup.string().required('Account Number is required'),
				email: yup
					.string()
					.email('Invalid Email')
					.required('Email is required'),
			}),
			onSubmit: async (values) => {
				console.log(values)
				try {
					// if (true) {
					// await resetPasswordChange({
					// 	url,
					// 	password: values.password,
					// 	password_confirmation: values.password_confirmation,
					// })
					// router.replace('/login')
					// snackbar.success({
					// 	title: account.password_has_been_reset,
					// 	description: account.password_has_been_reset_desc,
					// })
					// }
				} catch (error) {
					console.log(error)
				}
			},
		}
	)

	const addToWalletAccounts = () => {
		axiosApi
			.post('/api/check-wallet-accounts', {
				wallet_address: address,
				bank_code: selectedProvider?.code,
				bank_account_name: accountName,
				bank_account_number: values.accountNumber,
				phone_number: '12345678',
			})
			.then((res) => {
				// console.log(res.data);
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const addToTransactionHistory = (status, tempState) => {
		const date = new Date(Date.now())
		const dateStr =
			date.getFullYear() +
			'-' +
			('00' + (date.getMonth() + 1)).slice(-2) +
			'-' +
			('00' + date.getDate()).slice(-2) +
			' ' +
			('00' + date.getHours()).slice(-2) +
			':' +
			('00' + date.getMinutes()).slice(-2) +
			':' +
			('00' + date.getSeconds()).slice(-2) +
			('.' + date.getMilliseconds()).slice(-4)
		let idempotencyKey = ''
		idempotencyKey = tempState
			? chainData.find((data) => data.chainId === chainId)?.name +
			  `-${tempState}`
			: ''
		axiosApi
			.post('/api/transaction-histories', {
				data: {
					wallet_address: address,
					token: currentSelectedCoin?.name,
					chain: chainId?.toString(),
					bank_name: selectedProvider?.name,
					bank_account_number: values.accountNumber,
					status: status,
					bank_account_name: accountName,
					phone_number: '1234578',
					token_value: parseFloat(sellValue),
					idr_value: parseFloat(receiveValue),
					transaction_success: false,
					wallet_destination: process.env.NEXT_PUBLIC_VAULT_ADDRESS ?? '',
					idempotency_key: idempotencyKey,
					transaction_hash:
						status === 'Blockchain'
							? currentChain?.transactionUrl + tempState
							: '',
					transaction_id: '',
					receipt: '',
					fee: 2400,
					receive: Math.ceil(receiveValue),
					start_progress: status === 'Blockchain' ? dateStr : null,
					bank_code: selectedProvider?.code,
				},
			})
			.then(() => {
				if (status === 'Blockchain') {
					dispatch(
						setSelectedCoin({
							...currentSelectedCoin,
							cryptoValue: sellValue,
							idrValue: receiveValue,
							userAddress: address,
							providerName: selectedProvider?.name,
							accountName: accountName,
							accountNumber: values.accountNumber,
							providerCode: selectedProvider?.code,
							providerImgUrl: selectedProvider?.imgUrl,
						})
					)
					router.push('/success')
				}
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const resetValue = () => {
		setFieldValue('accountNumber', '')
		setAccountName('ACCOUNT NAME')
	}

	const { data: coinGeckoData } = useSWR(
		`/markets?vs_currency=idr&ids=${currentSelectedCoin?.coingecko}`,
		fetcher
	)

	const waitApproval =
		isPendingApproval || approvalLoading || isPendingCoin || tokenLoading

	useEffect(() => {
		if (!currentSelectedCoin?.coingecko) {
			router.push('/hyfen-ramp')
			return
		}
		if (coinGeckoData) {
			const idr = (
				coinGeckoData.data[0].current_price * parseFloat(sellValue ?? '0')
			).toFixed(0)

			setReceiveValue(idr === 'NaN' ? '0' : idr)
		}
	}, [coinGeckoData])

	// useEffect(() => {
	// 	if (approvalSuccess) {
	// 		writeCoinContract({
	// 			address: `0x${currentChain?.seamlessContract}`,
	// 			functionName: 'transfer_erc20',
	// 			abi: seamlessAbi,
	// 			args: [`0x${currentSelectedCoin?.contractAddress}`, 'token'],
	// 			value: parseFloat(sellValue) * currentSelectedCoin?.decimals,
	// 		})
	// 			.then(() => {
	// 				router.push('/success')
	// 			})
	// 			.catch((e) => {
	// 				console.log(e)
	// 			})
	// 	}
	// }, [isPendingApproval, approvalLoading, approvalSuccess])
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen withWallet isLoading={waitApproval} />
				<PaymentMethodModal
					showModal={showModal}
					setShowModal={setShowModal}
					setSelectedProvider={setSelectedProvider}
					resetValue={resetValue}
				/>
				<div className='relative h-full max-w-7xl container mx-auto flex gap-x-10 justify-center items-center h-full pt-[13vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>
								Choose Provider
							</p>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>
								Choose Provider*
							</p>
							<div
								onClick={() => {
									if (waitApproval) return
									setShowModal(true)
								}}
								className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'
							>
								<div className='flex gap-x-4 items-center'>
									<Image
										width={30}
										height={30}
										alt='provider'
										src={selectedProvider.imgUrl}
										className='w-8 h-8 rounded-full'
									/>
									<p className='font-normal text-white'>
										{selectedProvider.name}
									</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
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
											setAccountName('ACCOUNT NAME')
										}
									}}
									name='accountNumber'
									required={true}
									isError={errors.accountNumber}
									notes={errors.accountNumber}
								/>
							</div>
							<div className='mt-5 flex justify-center items-center'>
								<a
									onClick={async () => {
										if (waitApproval) return
										setIsCheckingBankAccount(true)
										try {
											setIsCheckingBankAccount(true)
											periodCheckBank = 0
											const getBankAccount = await checkBankInquiry()
											setIsCheckingBankAccount(false)
											if (getBankAccount?.data.status === 'TIME_OUT') {
												return Swal.fire(
													'Time Out',
													'Please try again a bit later.',
													'info'
												)
											}
											if (
												getBankAccount?.data.status === 'INVALID_ACCOUNT_NUMBER'
											) {
												setAccountName('ACCOUNT NAME')
												return Swal.fire(
													'Error!',
													'Bank account number invalid!',
													'error'
												)
											}
											setAccountName(getBankAccount?.data.account_holder)
										} catch (e) {
											setIsCheckingBankAccount(false)
											Swal.fire(
												'Error!',
												'Bank account number invalid!',
												'error'
											)
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
											<span>Check Account</span>
											<ArrowRightBlack />
										</div>
									)}
								</a>
							</div>
							<FormInput
								classRoot='flex-1 mt-5'
								disabled
								withIcon={false}
								value={accountName}
								onBlur={handleBlur}
								onChange={(e) => {}}
								required={true}
							/>
						</div>
					</div>
					<div className='relative h-full  flex flex-col justify-start items-start'>
						<div className='bg-[#1A1E48] p-[30px] w-[450px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>
								Account Information
							</p>
							<FormInput
								disabled={waitApproval}
								classRoot='mt-5'
								label={'Email Address'}
								placeholder={'Email Address'}
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
							<p className='text-white mt-5 text-[20px] text-bold'>
								Sell Crypto Breakdown
							</p>
							<div>
								<div className='flex justify-between items-center gap-x-3 mt-4'>
									<p className='text-white'>You will receive</p>
									<CurrencyInput
										disabled={waitApproval}
										placeholder='0'
										decimalsLimit={6}
										value={receiveValue}
										onValueChange={(value) => {
											const idrValueFloat = parseFloat(value ?? '0')
											setReceiveValue(
												idrValueFloat.toFixed(0) === 'Nan'
													? '0'
													: idrValueFloat.toFixed(0)
											)
											if (coinGeckoData) {
												const crypto = (
													(1 / coinGeckoData.data[0].current_price) *
													idrValueFloat
												).toFixed(6)
												setSellValue(crypto === 'NaN' ? '0' : crypto)
											}
										}}
										className='relative p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize disabled:opacity-60'
									/>
									<p className='text-white'>IDR</p>
								</div>
								<div className='flex justify-between items-center gap-x-3 mt-4'>
									<p className='text-white'>You sell</p>
									<CurrencyInput
										disabled={waitApproval}
										placeholder='0'
										defaultValue={parseFloat(
											currentSelectedCoin?.cryptoValue ?? '0'
										)}
										decimalsLimit={6}
										value={sellValue}
										onValueChange={(value) => {
											if (value === receiveValue) return
											setSellValue(value ?? '0')
											if (coinGeckoData) {
												const idr = (
													coinGeckoData.data[0].current_price *
													parseFloat(value ?? '0')
												).toFixed(0)

												setReceiveValue(idr === 'NaN' ? '0' : idr)
											}
										}}
										className='relative p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize disabled:opacity-60'
									/>
									<p className='text-white'>{currentSelectedCoin?.name}</p>
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
								<div className='flex justify-between mt-7'>
									<p className='text-white text-[20px]'>Total Payment</p>
									<p className='text-white text-[20px]'>
										{sellValue} {currentSelectedCoin?.name}
									</p>
								</div>
							</div>
							<div className='mt-[30px] flex justify-center items-center'>
								<a
									onClick={async () => {
										if (!coinGeckoData) {
											return Swal.fire({
												icon: 'info',
												title: 'Internal Error',
												text: 'Please wait for a few seconds!',
											})
										}
										if (waitApproval) return
										if (insufficientBalance) return
										if (!address) {
											return Swal.fire({
												icon: 'info',
												title: 'Check Wallet',
												text: 'Please connect your wallet!',
											})
										}
										if (chainId !== 1) {
											return Swal.fire({
												icon: 'info',
												title: 'Check Network',
												text: 'Network not supported!',
											})
										}
										if (accountName === 'ACCOUNT NAME') {
											return Swal.fire({
												icon: 'info',
												title: 'Check Account',
												text: 'Please check your account!',
											})
										}
										if (
											errors.email ||
											errors.accountNumber ||
											sellValue <= 0 ||
											receiveValue <= 0
										) {
											return Swal.fire({
												icon: 'info',
												title: 'Fill All Fields',
												text: 'Please fill all required fields!',
											})
										}
										addToWalletAccounts()
										if (!currentSelectedCoin?.native) {
											try {
												const tx = await writeApprovalContract({
													abi: erc20Abi,
													address: `0x${currentSelectedCoin?.contractAddress}`,
													functionName: 'transfer',
													args: [
														process.env.NEXT_PUBLIC_VAULT_ADDRESS,
														parseFloat(sellValue) *
															currentSelectedCoin?.decimals,
													],
												})
												if (tx) {
													addToTransactionHistory('Blockchain', tx)
												}
											} catch (e) {
												console.log(e)
											}
										} else {
											try {
												setTokenLoading(true)
												const tx = await sendTransactionAsync({
													to: process.env.NEXT_PUBLIC_VAULT_ADDRESS,
													value: parseEther(sellValue),
												})
												if (tx) {
													addToTransactionHistory('Blockchain', tx)
												}
												setTokenLoading(false)
											} catch (e) {
												setTokenLoading(false)
												console.log(e)
											}
										}
									}}
									className={`${
										insufficientBalance
											? 'cursor-not-allowed bg-[#712F30] text-white border border-[#712F30] header__download-button-disabled'
											: 'cursor-pointer bg-white text-slate-900 border-white header__download-button'
									} w-full flex items-center gap-x-[12px] justify-center text-center py-3 px-11 inline-block text-base font-bold`}
								>
									{waitApproval ? (
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
										<div className='flex items-center gap-x-2 h-[30px]'>
											<span>
												{insufficientBalance
													? `Insufficient ${currentSelectedCoin?.name}`
													: 'Buy Now'}
											</span>{' '}
											<ArrowRightBlack
												fill={insufficientBalance ? 'white' : '#000'}
											/>
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
