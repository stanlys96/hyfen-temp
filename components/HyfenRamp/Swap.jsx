import Image from 'next/image'
import CurrencyInput from 'react-currency-input-field'
import ArrowRightBlack from '../Icons/ArrowRightBlack'
import { Circles } from 'react-loader-spinner'
import { formatNumber } from '../../utils/helper'
import { ArrowDown } from '../Icons'
import Swal from 'sweetalert2'

export const SwapComponent = ({
	quoteLoading,
	cryptoValue,
	setAmount,
	setDisableSwap,
	setValueExchanged,
	setCryptoValue,
	setSelectedModal,
	setShowModal,
	currentSelectedToken,
	setCurrentSelectedToken,
	setCurrentSwappedToken,
	currentSwappedToken,
	disableSwap,
	router,
	toTokenValue,
	setToTokenValue,
}) => {
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
										setValueExchanged(Number(value))
										setCryptoValue(value ?? '0')
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
								<p className='text-[#FFFFFF50] text-[12px]'>Ronin Network</p>
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
							<Image width={60} height={54} src='/images/Swap.svg' alt='Swap' />
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
								<p className='text-[#FFFFFF50] text-[12px]'>Ronin Network</p>
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
							return Swal.fire({
								icon: 'info',
								title: 'Under Development',
								text: 'This feature is currently under development...',
							})
							// if (quoteLoading || disableSwap) return
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
	)
}
