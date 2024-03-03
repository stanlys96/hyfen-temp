import CurrencyInput from 'react-currency-input-field'
import Image from 'next/image'
import Rupiah from '../Icons/Rupiah'
import { ArrowDown } from '../Icons'
import ArrowRightBlack from '../Icons/ArrowRightBlack'
import Swal from 'sweetalert2'

export const BuyComponent = ({
	idrValue,
	setIdrValue,
	setCryptoValue,
	setShowModal,
	cryptoValue,
	data,
	currentSelectedCoin,
	usedBalance,
}) => {
	return (
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
						<div className='flex justify-center items-center gap-x-[12px] cursor-pointer'>
							<Rupiah />
							<p>IDR</p>
							<ArrowDown className='fill-current h-4 ' />
						</div>
					</div>
					<p className='text-[#FFFFFF4D] italic text-[14px] mt-[10px]'>
						Minimum Deposit: 10,000 IDR
					</p>
					<p className='mb-3 mt-[10px]'>You get</p>
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
											data.data[0].current_price * parseFloat(value ?? '0')
										).toFixed(0)

										setIdrValue(idr === 'NaN' ? '0' : idr)
									}
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
								src={currentSelectedCoin?.imgUrl}
								alt={currentSelectedCoin?.name}
								className='rounded-full'
							/>
							<p>{currentSelectedCoin?.name}</p>
							<ArrowDown className='fill-current h-4 ' />
						</div>
					</div>
					<p className='text-[#FFFFFF4D] italic text-[14px] mt-[10px]'>
						Balance: {usedBalance.toFixed(5)} {currentSelectedCoin?.name}
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
							return Swal.fire({
								icon: 'info',
								title: 'Under Development',
								text: 'This feature is currently under development...',
							})
						}}
						className='w-full flex items-center gap-x-[12px] justify-center header__download-button text-center text-slate-900 bg-white py-3 px-11 inline-block text-base font-bold cursor-pointer'
					>
						<span>Buy Now</span> <ArrowRightBlack />
					</a>
				</div>
			</div>
		</div>
	)
}
