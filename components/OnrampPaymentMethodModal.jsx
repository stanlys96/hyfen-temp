import ArrowLeft from './Icons/ArrowLeft'
import { ArrowRight } from './Icons'
import { FormInput } from './molecules/FormInput'
import { useState, useEffect } from 'react'
import { formatNumber } from '../utils/helper'
import Image from 'next/image'
import { onrampPaymentMethod } from '../utils/helper'
import useSWR from 'swr'
import { fetcherQuote } from '../utils/axios'
// asd
function PaymentMethodModal({
	showModal,
	setShowModal,
	setPaymentMethod,
	paymentResult,
}) {
	const [searchValue, setSearchValue] = useState('')
	const [paymentList, setPaymentList] = useState([])

	const filterBank = (bankData) => {
		return (
			bankData.isActive &&
			bankData.currency === 'IDR' &&
			bankData.name.toLowerCase().includes(searchValue)
		)
	}

	const sortBank = (a, b) => {
		return a.flatFeeAmount - b.flatFeeAmount
	}

	const listResult = paymentList?.filter(filterBank)

	useEffect(() => {
		setPaymentList(paymentResult)
	}, [paymentResult])

	return (
		<div className={`${showModal ? 'block' : 'hidden'}`}>
			<div
				className='z-50 bg-[#828282]/50 dark:bg-[#101016CC] backdrop-blur-sm w-full sm:p-5 md:p-10 fixed top-0 left-0 items-center justify-center flex h-full'
				style={{ opacity: 1 }}
			>
				<div>
					<div className='bg-[#332D9B] py-[20px] px-[30px] rounded-t-[10px] flex items-center'>
						<div className='flex items-center gap-x-[10px]'>
							<a className='cursor-pointer' onClick={() => setShowModal(false)}>
								<ArrowLeft />
							</a>
							<p className='text-center text-white'>Payment Method</p>
						</div>
					</div>
					<div className='bg-[#080F5AE5] px-[29px] py-[2px] rounded-b-[10px]'>
						<div className='mt-5'>
							<FormInput
								classRoot=''
								label={''}
								placeholder={'Search...'}
								typeForm='search'
								value={searchValue}
								// onBlur={handleBlur}
								onChange={(e) => {
									setSearchValue(e.target.value)
								}}
								name='search'
								required={true}
								type='text'
								// isError={errors.email}
								// notes={errors.email}
							/>
						</div>
						<div className='md:w-[400px] overflow-y-auto h-[500px] max-h-[60vh]'>
							{listResult?.map((result) => (
								<div
									key={result.code}
									onClick={() => {
										// setSelectedProvider({
										// 	name: result.name,
										// 	code: result.bank_code,
										// 	imgUrl: existBankData.includes(result.bank_code)
										// 		? `/img/banks/${result.bank_code}.png`
										// 		: '/img/banks/bank.png',
										// })
										setShowModal(false)
										setPaymentMethod(result)
										// setSelectedCategory('bank')
										// resetValue()
									}}
									className='cursor-pointer flex flex-col gap-y-2 my-6'
								>
									<div className='flex gap-x-4 items-center justify-between w-full'>
										<div className='flex gap-x-4 items-center'>
											<Image
												width={30}
												height={30}
												className='rounded-full h-8 w-8'
												onError={({ currentTarget }) => {
													currentTarget.onerror = null // prevents looping
													currentTarget.src = ''
												}}
												src={result.image}
											/>
											<div>
												<p className='font-bold text-[14px] text-white overflow-ellipsis'>
													{result?.name}
												</p>
											</div>
										</div>
										<ArrowRight />
									</div>
									<p className='text-[#9CA3AF] text-[13px] overflow-ellipsis'>
										Flat Fee Amount:{' '}
										{formatNumber(result?.flatFeeAmount ?? '0')} IDR
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentMethodModal
