import ArrowLeft from './Icons/ArrowLeft'
import { ArrowRight } from './Icons'
import { FormInput } from './molecules/FormInput'
import { useState } from 'react'
import { bankTypes, eWallets, existBankData } from '../utils/helper'
import Image from 'next/image'
import useSWR from 'swr'
import { fetcherFlip } from '../utils/axios'
import { CountryListJson } from '../data'
// asd
function CountryModal({ showModal, setShowModal, setFieldValue }) {
	const { data: banksData } = useSWR(`/banks`, fetcherFlip)

	const [searchValue, setSearchValue] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('bank')

	const filterBank = (bankData) => {
		return (
			bankData.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			searchValue.toLowerCase().includes(bankData.name.toLowerCase())
		)
	}

	const listResult = CountryListJson?.filter(filterBank)

	return (
		<div className={`${showModal ? 'block' : 'hidden'}`}>
			<div
				className='z-100 bg-[#828282]/50 dark:bg-[#101016CC] backdrop-blur-sm w-full sm:p-5 md:p-10 fixed top-0 left-0 items-center justify-center flex h-full'
				style={{ opacity: 1 }}
			>
				<div>
					<div className='bg-[#332D9B] py-[20px] px-[30px] rounded-t-[10px] flex items-center'>
						<div className='flex items-center gap-x-[10px] z-100'>
							<a
								className='cursor-pointer z-100'
								onClick={() => setShowModal(false)}
							>
								<ArrowLeft />
							</a>
							<p className='text-center text-white'>Country List</p>
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
						<div className='w-[400px] overflow-y-auto h-[500px] max-h-[60vh]'>
							{listResult?.map((result, index) => (
								<div
									key={result.code}
									onClick={() => {
										setFieldValue('country', {
											name: result.name,
											code: result.code,
										})
										setShowModal(false)
									}}
									className={`cursor-pointer flex gap-x-4 justify-between items-center ${
										index === 0 ? 'mt-7' : 'my-7'
									}`}
								>
									<div className='flex gap-x-4 items-center'>
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

export default CountryModal
