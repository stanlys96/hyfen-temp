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
import Swal from 'sweetalert2'

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
							const checkResult = (window.mobileCheck = function () {
								let check = false
								;(function (a) {
									if (
										/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
											a
										) ||
										/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
											a.substr(0, 4)
										)
									)
										check = true
								})(navigator.userAgent || navigator.vendor || window.opera)
								return check
							})
							if (checkResult()) {
								return Swal.fire(
									'Mobile detected',
									'Mobile device detected. Please use computer browser to access this service.',
									'info'
								)
							}

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
