import Image from 'next/image'
import CurrencyInput from 'react-currency-input-field'
import ArrowRightBlack from '../Icons/ArrowRightBlack'
import { Circles } from 'react-loader-spinner'
import { ArrowDown } from '../Icons'
import useSWR from 'swr'
import qs from 'qs'
import { useState } from 'react'
import { formatUnits, parseUnits } from '@ethersproject/units'
import {
	useAccount,
	useReadContract,
	useSimulateContract,
	useWriteContract,
	useWaitForTransactionReceipt,
	useChainId,
	useEstimateGas,
	useSendTransaction,
	useBalance,
} from 'wagmi'
import erc20Abi from '../../contracts/erc20-abi.json'
import { useEffect } from 'react'

const MAX_ALLOWANCE =
	115792089237316195423570985008687907853269984665640564039457584007913129639935n

const exchangeProxy = '0xDef1C0ded9bec7F1a1670819833240f027b25EfF'

const AFFILIATE_FEE = 0 // Percentage of the buyAmount that should be attributed to feeRecipient as affiliate fees
const FEE_RECIPIENT = '0xf3f1A4EadA0D8a35d82421E303a139EBDC8E823f' // The ETH address that should receive affiliate fees

const fetcher = ([endpoint, params]) => {
	const { sellAmount, buyAmount } = params
	if (!sellAmount && !buyAmount) return
	const query = qs.stringify(params)
	return fetch(`${endpoint}?${query}`, {
		headers: {
			'0x-api-key': process.env.NEXT_PUBLIC_0X_API_KEY,
		},
	}).then((res) => res.json())
}

export const SwapComponent = ({
	quoteLoading,
	setSelectedModal,
	setShowModal,
	currentSelectedToken,
	setCurrentSelectedToken,
	setCurrentSwappedToken,
	currentSwappedToken,
}) => {
	const chainId = useChainId()
	const [price, setPrice] = useState()
	const [quote, setQuote] = useState()
	const [sellAmount, setSellAmount] = useState('')
	const [buyAmount, setBuyAmount] = useState('')
	const [tradeDirection, setTradeDirection] = useState('sell')
	const sellTokenDecimals = currentSelectedToken?.decimalValue
	const { address } = useAccount()
	const parsedSellAmount =
		sellAmount && tradeDirection === 'sell'
			? parseUnits(sellAmount, sellTokenDecimals).toString()
			: undefined

	const buyTokenDecimals = currentSwappedToken?.decimalValue

	const parsedBuyAmount =
		buyAmount && tradeDirection === 'buy'
			? parseUnits(buyAmount, buyTokenDecimals).toString()
			: undefined
	const { data: allowance, refetch } = useReadContract({
		account: address,
		address: `0x${currentSelectedToken?.contractAddress}`,
		abi: erc20Abi,
		functionName: 'allowance',
		args: [address, exchangeProxy],
	})

	const { data: currentBalance } = useBalance({
		address: address,
		token: `0x${currentSelectedToken?.contractAddress}`,
	})

	const formattedBalance = currentBalance?.formatted
	const formattedAllowance = formatUnits(
		allowance ?? '0',
		currentSelectedToken?.decimalValue
	)
	const { isLoading } = useSWR(
		[
			`https://${
				chainId === 42161 ? 'arbitrum.' : chainId === 10 ? 'optimism.' : ''
			}api.0x.org/swap/v1/price`,
			{
				sellToken: `0x${currentSelectedToken?.contractAddress}`,
				buyToken: `0x${currentSwappedToken?.contractAddress}`,
				sellAmount: parsedSellAmount,
				buyAmount: parsedBuyAmount,
				takerAddress: address,
				feeRecipient: FEE_RECIPIENT,
				buyTokenPercentageFee: AFFILIATE_FEE,
			},
		],
		fetcher,
		{
			onSuccess: (data) => {
				setPrice(data)
				refetch()
				console.log(data, '<<< DATA')
				if (tradeDirection === 'sell') {
					setBuyAmount(
						parseFloat(formatUnits(data.buyAmount, buyTokenDecimals)).toFixed(2)
					)
				} else {
					setSellAmount(
						parseFloat(formatUnits(data.sellAmount, sellTokenDecimals)).toFixed(
							2
						)
					)
				}
			},
			onError: (error) => {
				console.log(error, '<<< ERROR')
			},
		}
	)
	const { isLoading: isLoadingPrice } = useSWR(
		[
			`https://${
				chainId === 42161 ? 'arbitrum.' : chainId === 10 ? 'optimism.' : ''
			}api.0x.org/swap/v1/quote`,
			{
				sellToken: price?.sellTokenAddress,
				buyToken: price?.buyTokenAddress,
				sellAmount: price?.sellAmount,
				// buyAmount: price?.buyAmount,
				takerAddress: address,
				feeRecipient: FEE_RECIPIENT,
				buyTokenPercentageFee: AFFILIATE_FEE,
			},
		],
		fetcher,
		{
			onSuccess: (data) => {
				console.log(data, '<<< DATA QUOIWUQE')
				setQuote(data)
				refetch()
			},
			onError: () => {
				refetch()
			},
		}
	)
	console.log(isLoadingPrice)
	// 1. Read from erc20, does spender (0x Exchange Proxy) have allowance?

	const { data } = useSimulateContract({
		address: `0x${currentSelectedToken?.contractAddress}`,
		abi: erc20Abi,
		functionName: 'approve',
		args: [exchangeProxy, MAX_ALLOWANCE],
	})
	console.log(data)

	const { data: writeContractResult } = useWriteContract()

	const { data: quoteData } = useEstimateGas({
		to: quote?.to, // The address of the contract to send call data to, in this case 0x Exchange Proxy
		data: quote?.data, // The call data required to be sent to the to contract address.
	})

	console.log(quoteData)

	const { sendTransaction } = useSendTransaction()

	const { isLoading: isApproving } = useWaitForTransactionReceipt({
		hash: writeContractResult ?? '',
		onReplaced(data) {
			console.log(data, 'WALAO')
			refetch()
		},
	})

	useEffect(() => {
		refetch()
	}, [isApproving])

	return (
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
									value={sellAmount}
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
										setTradeDirection('sell')
										setSellAmount(value)
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
										className='rounded-full'
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
								<p className='text-[#FFFFFF50] text-[12px]'>&nbsp;</p>
								<p className='text-[#FFFFFF50] text-[12px]'>
									{chainId === 1
										? 'Ethereum'
										: chainId === 42161
										? 'Arbitrum'
										: chainId === 10
										? 'Optimism'
										: 'Unsupported'}{' '}
									Network
								</p>
							</div>
						</div>
						<div
							onClick={() => {
								setBuyAmount(0)
								setSellAmount(0)
								const selectedTokenTemp = { ...currentSelectedToken }
								const swappedTokenTemp = { ...currentSwappedToken }
								setCurrentSelectedToken(swappedTokenTemp)
								setCurrentSwappedToken(selectedTokenTemp)
							}}
							className='absolute cursor-pointer top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
						>
							<Image width={60} height={54} src='/images/Swap.svg' alt='Swap' />
						</div>
						<div className='w-full rounded-[11px] mt-3 p-[12px] bg-[#43466D26] border border-[#FFFFFF4D]'>
							<div className='flex gap-x-2 items-center'>
								<CurrencyInput
									id='input-example'
									name='input-name'
									placeholder='0'
									value={buyAmount}
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
										setTradeDirection('buy')
										setBuyAmount(value)
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
										className='rounded-full'
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
									{chainId === 1
										? 'Ethereum'
										: chainId === 42161
										? 'Arbitrum'
										: chainId === 10
										? 'Optimism'
										: 'Unsupported'}{' '}
									Network
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
							Swap {sellAmount} {currentSelectedToken?.name} for {buyAmount}{' '}
							{currentSwappedToken?.name}
						</p>
						<ArrowDown className='fill-current h-4 ' />
					</div>
				</div>
				<div className='mt-[50px] flex justify-center items-center'>
					<a
						onClick={async () => {
							if (isLoading) return
							if (parseFloat(sellAmount) > parseFloat(formattedBalance)) return
							if (parseFloat(sellAmount) > parseFloat(formattedAllowance)) {
								try {
									console.log('APPROVE!')
									// const writtenValue = await approveAsync(data?.request)
								} catch (e) {
									console.log(e)
								}
							} else {
								console.log('????')
								console.log(quote, '<< QUOTE')
								try {
									sendTransaction({
										to: quote?.to,
										data: quote?.data,
									})
								} catch (e) {
									console.log(e)
								}
							}
						}}
						className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 ${
							isLoading
								? 'bg-[#888888] header__download-button-disabled'
								: 'bg-white header__download-button'
						} py-3 px-11 inline-block text-base font-bold ${
							isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
						}`}
					>
						{isLoading || isApproving ? (
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
									{parseFloat(sellAmount) > parseFloat(formattedAllowance)
										? 'Increase Allowance'
										: parseFloat(sellAmount) > parseFloat(formattedBalance)
										? `Not enough ${currentSelectedToken?.name}`
										: 'Swap Now'}
								</span>
								<ArrowRightBlack />
							</div>
						)}
					</a>
				</div>
			</div>
		</div>
	)
}
