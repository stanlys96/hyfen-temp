import { chainData } from '../../utils/helper'
import ArrowLeft from '../Icons/ArrowLeft'
import SearchWhite from '../Icons/SearchWhite'
import Image from 'next/image'
import { supportedOnrampCoins } from '../../utils/helper'

function OnRampModal({ showModal, setShowModal, setCurrenctSelectedCoin }) {
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
						{supportedOnrampCoins.map((data, index) => (
							<div
								key={index}
								onClick={() => {
									if (!data.transactionType.includes('onramp')) return
									setCurrenctSelectedCoin(data)
									setShowModal(false)
								}}
								className={`${
									!data.transactionType.includes('onramp')
										? 'cursor-not-allowed'
										: 'cursor-pointer'
								} flex gap-x-4 items-center my-5`}
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
										<p
											className={`font-bold text-[13px] ${
												!data.transactionType.includes('onramp')
													? 'line-through'
													: 'no-underline'
											}`}
										>
											{data.label}{' '}
										</p>
										<p className='font-bold text-[13px]'>
											{!data.transactionType.includes('onramp') &&
												'Coming soon'}
										</p>
									</div>
									<p className='text-[#9CA3AF] text-[14px]'>
										{data.network[0].toUpperCase() + data.network.slice(1)}{' '}
										Network
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OnRampModal
