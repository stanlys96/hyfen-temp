import CurrencyInput from 'react-currency-input-field'
import Image from 'next/image'
import { ArrowDown } from '../Icons'
import ArrowRightBlack from '../Icons/ArrowRightBlack'
import { useDispatch } from 'react-redux'
import {
	setCurrentSelectedOnrampCoin,
	setMethod,
} from '../../src/stores/user-slice'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcherQuote } from '../../utils/axios'
import { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import OnRampModal from './OnRampModal'
import CurrencyModal from './CurrencyModal'

export const BuyComponent = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [idrValue, setIdrValue] = useState('')

	const [cryptoValue, setCryptoValue] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [currentSelectedCoin, setCurrenctSelectedCoin] = useState({
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
	})
	const [showCurrencyModal, setShowCurrencyModal] = useState(false)
	const [currentSelectedCurrency, setCurrentSelectedCurrency] = useState({
		_id: '64dae2066acf6644dd1a3c76',
		value: 'INDONESIA',
		country: 'Indonesia',
		currency: 'IDR',
		countryCode: 'ID',
		logo: '/img/idr.svg',
		name: 'Indonesian Rupiah',
		requireBankName: true,
		requireIfsc: false,
		requireIban: false,
		requireAchOrWire: false,
		requireAccountNumber: true,
		symbol: 'Rp',
		randomNumber: 3,
		isRandomNumberDecimal: false,
		id: '64dae2066acf6644dd1a3c76',
	})
	const { data: quoteData, isLoading } = useSWR(
		`/onramp/quote?amount=${parseFloat(idrValue ?? '0')}&inputCurrency=${
			currentSelectedCurrency?.currency
		}&outputCurrency=${currentSelectedCoin?.id}`,
		fetcherQuote
	)

	const result = quoteData?.data?.data
	useEffect(() => {
		if (result) {
			setCryptoValue(result?.total_received_amount_in_crypto?.toFixed(2))
		} else {
			setCryptoValue('0')
		}
	}, [result, currentSelectedCoin])
	return (
		<div className='flex justify-center items-center'>
			<OnRampModal
				showModal={showModal}
				setShowModal={setShowModal}
				setCurrenctSelectedCoin={setCurrenctSelectedCoin}
				setCurrentSelectedCurrency={setCurrentSelectedCurrency}
				type='onramp'
			/>
			<CurrencyModal
				showModal={showCurrencyModal}
				setShowModal={setShowCurrencyModal}
				setCurrentSelectedCurrency={setCurrentSelectedCurrency}
				availableCurrencies={currentSelectedCoin?.currencies ?? []}
			/>
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
								}}
								className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold sm:max-w-full outline-none border-none w-full`}
							/>
						</div>
						<div
							onClick={() => setShowCurrencyModal(true)}
							className='flex justify-center items-center gap-x-[12px] cursor-pointer'
						>
							<Image
								width={30}
								height={30}
								src={currentSelectedCurrency?.logo}
								alt={currentSelectedCurrency?.name}
								className='rounded-full'
							/>
							<p>{currentSelectedCurrency?.currency}</p>
							<ArrowDown className='fill-current h-4 ' />
						</div>
					</div>
					<p className='text-[#FFFFFF4D] italic text-[14px] mt-[10px]'>
						Minimum Deposit: 50,000 IDR
					</p>
					<p className='mb-3 mt-[10px]'>You get</p>
					<div className='w-full h-[56px] rounded-[11px] px-[12px] bg-[#43466D26] border border-[#FFFFFF4D] flex justify-between items-center'>
						<div className='border-r border-[#FFFFFF4D] h-full'>
							<CurrencyInput
								disabled
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
								}}
								className={`h-full text-[16px] md:text-[16px] text-cute bg-transparent font-bold sm:max-w-full outline-none border-none w-full`}
							/>
						</div>
						<div
							onClick={() => setShowModal(true)}
							className='cursor-pointer flex justify-center items-center gap-x-[5px]'
						>
							<Image
								width={30}
								height={30}
								src={currentSelectedCoin?.logo}
								alt={currentSelectedCoin?.label}
								className='rounded-full'
							/>
							<p>{currentSelectedCoin?.name}</p>
							<ArrowDown className='fill-current h-4 ' />
						</div>
					</div>
					<p className='text-[#FFFFFF4D] italic text-[14px] mt-[10px]'>
						Network:{' '}
						{currentSelectedCoin?.network[0].toUpperCase() +
							currentSelectedCoin?.network.slice(1)}
					</p>
					<div className='flex justify-between mt-[15px]'>
						<p className='text-[16px]'>Summary:</p>
						<p className='text-[16px]'>Quote updates in 7s</p>
					</div>
					<div className='border border-[#FFFFFF4D] px-[12px] rounded-[11px] h-[56px] flex justify-between items-center mt-[15px]'>
						<p className='font-normal'>
							You get{' '}
							<span className='the-bold'>
								{cryptoValue} {currentSelectedCoin?.name}
							</span>
						</p>
						<ArrowDown className='fill-current h-4 ' />
					</div>
				</div>
				<div className='mt-[50px]'>
					<a
						onClick={() => {
							if (parseFloat(idrValue ?? '0') < 50000) return
							if (isLoading) return
							dispatch(setMethod('buy'))
							dispatch(
								setCurrentSelectedOnrampCoin({
									idrValue: idrValue,
									logo: currentSelectedCoin?.logo,
									network: currentSelectedCoin?.network,
									priceId: currentSelectedCoin?.priceId,
									cryptoName: currentSelectedCoin?.name,
									id: currentSelectedCoin?.id,
								})
							)
							router.push({
								pathname: '/login',
							})
						}}
						className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 ${
							isLoading || parseFloat(idrValue ?? '0') < 50000
								? 'bg-[#888888] header__download-button-disabled'
								: 'bg-white header__download-button'
						} py-3 px-11 inline-block text-base font-bold ${
							isLoading || parseFloat(idrValue ?? '0') < 50000
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
									{parseFloat(idrValue ?? '0') < 50000
										? 'Minimum 50,000 IDR'
										: 'Buy Now'}
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
