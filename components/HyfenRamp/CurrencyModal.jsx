import ArrowLeft from '../Icons/ArrowLeft'
import Image from 'next/image'
import { currencyList } from '../../utils/helper'

function CurrencyModal({
	showModal,
	setShowModal,
	setCurrentSelectedCurrency,
	availableCurrencies,
}) {
	const filterCurrencies = (data) => {
		return availableCurrencies.includes(data.currency)
	}
	return (
		<div className={`${showModal ? 'block' : 'hidden'} md:w-full z-1000`}>
			<div
				className='z-50 bg-[#828282]/50 dark:bg-[#101016CC] backdrop-blur-sm w-full sm:p-5 md:p-10 fixed top-0 left-0 items-center justify-center flex h-full'
				style={{ opacity: 1 }}
			>
				<div>
					<div className='bg-[#332D9B] py-[20px] px-[30px] w-[90vw] md:w-[390px] rounded-t-[10px] flex items-center'>
						<div className='flex items-center gap-x-[10px]'>
							<a className='cursor-pointer' onClick={() => setShowModal(false)}>
								<ArrowLeft />
							</a>
							<p className='text-center'>Select a currency</p>
						</div>
					</div>
					<div className='bg-[#080F5AE5] px-[29px] py-[12px] rounded-b-[10px]'>
						{/* <div className='px-[12px] py-[8px] border border-[#43466D] rounded-[8px] flex gap-x-[5px] items-center'>
							<SearchWhite />
							<input
								className='bg-transparent border-none w-full outline-none'
								type='text'
								placeholder='Search...'
							/>
						</div> */}
						{currencyList.filter(filterCurrencies).map((data, index) => (
							<div
								key={index}
								onClick={() => {
									setCurrentSelectedCurrency(data)
									setShowModal(false)
								}}
								className={`cursor-pointer flex gap-x-4 items-center my-5`}
							>
								<Image
									width={40}
									height={40}
									src={data.logo}
									alt={data.name}
									className='rounded-full'
								/>
								<div>
									<div className='flex gap-x-2 items-center'>
										<p className={`font-bold text-[13px] no-underline`}>
											{data.name}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CurrencyModal
