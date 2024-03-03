import ArrowLeft from './Icons/ArrowLeft'
import { ArrowRight } from './Icons'
import { FormInput } from './molecules/FormInput'
import { useState } from 'react'
import { bankTypes, eWallets, existBankData } from 'utils/helper'
import Image from 'next/image'
import useSWR from 'swr'
import { fetcherFlip } from 'utils/axios'

function PaymentMethodModal({
	showModal,
	setShowModal,
	setSelectedProvider,
	resetValue,
}) {
	const { data: banksData } = useSWR(`/banks`, fetcherFlip)

	const [searchValue, setSearchValue] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('bank')

	const filterBank = (bankData) => {
		return (
			bankData.status.toLowerCase() === 'operational' &&
			bankData.name.toLowerCase().includes(searchValue.toLowerCase())
		)
	}

	const filterCategory = (bankData) => {
		if (searchValue) return bankData.status.toLowerCase() === 'operational'
		if (selectedCategory === 'bank') {
			return (
				!eWallets.includes(bankData.bank_code) &&
				bankData.status.toLowerCase() === 'operational'
			)
		} else if (selectedCategory === 'e-wallet') {
			return (
				eWallets.includes(bankData.bank_code) &&
				bankData.status.toLowerCase() === 'operational'
			)
		}
	}

	const listResult = banksData?.data?.filter(filterBank).filter(filterCategory)

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
							{!searchValue && (
								<div className='mt-5 flex gap-x-2 items-center'>
									{bankTypes.map((bank) => (
										<div
											key={bank.id}
											onClick={() => {
												setSelectedCategory(bank.name.toLowerCase())
											}}
											className={`text-white ${
												selectedCategory.toLowerCase() ===
													bank.name.toLowerCase() && 'bg-[#332D9B]'
											} flex gap-x-2 items-center border border-[#332D9B] py-2 px-4 rounded-[20px] cursor-pointer hover:bg-[#332D9B] transition duration-500`}
										>
											<Image
												width={30}
												height={30}
												alt='bank'
												src={bank.imgUrl}
												className='rounded-full h-6 w-6'
											/>
											<span>{bank.name}</span>
										</div>
									))}
								</div>
							)}
						</div>
						<div className='w-[400px] overflow-y-auto h-[500px] max-h-[60vh]'>
							{listResult?.map((result) => (
								<div
									key={result.bank_code}
									onClick={() => {
										setSelectedProvider({
											name: result.name,
											code: result.bank_code,
											imgUrl: existBankData.includes(result.bank_code)
												? `/img/banks/${result.bank_code}.png`
												: '/img/banks/bank.png',
										})
										setShowModal(false)
										setSelectedCategory('bank')
										resetValue()
									}}
									className='cursor-pointer flex gap-x-4 justify-between items-center my-5'
								>
									<div className='flex gap-x-4 items-center'>
										<Image
											width={30}
											height={30}
											className='rounded-full h-8 w-8'
											onError={({ currentTarget }) => {
												currentTarget.onerror = null // prevents looping
												currentTarget.src = '/img/banks/bank.png'
											}}
											src={
												existBankData.includes(result.bank_code)
													? `/img/banks/${result.bank_code}.png`
													: '/img/banks/bank.png'
											}
										/>
										<div>
											<p className='font-bold text-[14px] text-white overflow-ellipsis'>
												{result.name}
											</p>
										</div>
									</div>
									<ArrowRight />
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
