import { chainData } from '../../utils/helper'
import ArrowLeft from '../Icons/ArrowLeft'
import SearchWhite from '../Icons/SearchWhite'
import Image from 'next/image'
import { useChainId } from 'wagmi'

function RampModal({
	currentSelectedToken,
	setCurrentSelectedToken,
	showModal,
	setShowModal,
	setAmount,
	setToTokenValue,
	setDisableSwap,
	isSelectedToken,
	isSwappedToken,
	currentSwappedToken,
	setCurrentSwappedToken,
}) {
	const chainId = useChainId()
	const currentData = chainData.find((theData) => theData.chainId === chainId)
	function filterListData(obj) {
		return (
			obj.name !== currentSelectedToken.name &&
			obj.name !== currentSwappedToken.name
		)
	}

	return (
		<div className={`${showModal ? 'block' : 'hidden'} md:w-full`}>
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
						<div className='px-[12px] py-[8px] border border-[#43466D] rounded-[8px] flex gap-x-[5px] items-center'>
							<SearchWhite />
							<input
								className='bg-transparent border-none w-full outline-none'
								type='text'
								placeholder='Search...'
							/>
						</div>
						{currentData &&
							currentData.tokenData
								.filter(filterListData)
								.map((data, index) => (
									<div
										key={index}
										onClick={() => {
											if (isSelectedToken) {
												setCurrentSelectedToken({
													name: data.name,
													imgUrl: data.imgUrl,
													nickname: data.nickname,
													decimals: data.decimals,
													native: data.native,
													contractAddress: data.contractAddress,
													decimalValue: data.decimalValue,
												})
											}
											if (isSwappedToken) {
												setCurrentSwappedToken({
													name: data.name,
													imgUrl: data.imgUrl,
													nickname: data.nickname,
													decimals: data.decimals,
													native: data.native,
													address: data.contractAddress,
													decimalValue: data.decimalValue,
												})
											}
											setShowModal(false)
											setToTokenValue(0)
											setAmount(0)
											setDisableSwap(true)
										}}
										className='cursor-pointer flex gap-x-4 items-center my-5'
									>
										<Image
											width={40}
											height={40}
											src={data.imgUrl}
											alt={data.name}
											className='rounded-full'
										/>
										<div>
											<p className='font-bold text-[14px]'>{data.nickname}</p>
											<p className='text-[#9CA3AF] text-[14px]'>
												{currentData.name} Network
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

export default RampModal
