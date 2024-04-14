import ArrowLeft from './Icons/ArrowLeft'
import { ArrowRight } from './Icons'
import Image from 'next/image'
import { onrampPaymentMethod } from '../utils/helper'
// asd
function RecipientModal({
	showModal,
	setShowModal,
	setPaymentMethod,
	listResult,
}) {
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
							<p className='text-center text-white'>Recipients</p>
						</div>
					</div>
					<div className='bg-[#080F5AE5] px-[29px] py-[2px] rounded-b-[10px]'>
						{/* <div className='mt-5'>
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
						</div> */}
						<div className='min-w-[250px] md:w-[400px] overflow-y-auto h-[500px] max-h-[60vh]'>
							{listResult?.length > 0 ? (
								listResult?.map((result) => (
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
											setPaymentMethod({
												id: result.id,
												name: result.name,
												email: result.email,
												...result.bank[0],
											})
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
														currentTarget.src = '/img/banks/bank.png'
													}}
													src={
														onrampPaymentMethod?.find(
															(data) => data.code === result.bank[0].paymentCode
														)?.image
													}
												/>
												<div>
													<p className='font-bold text-[14px] text-white overflow-ellipsis'>
														{result.bank[0].bankName}
													</p>
												</div>
											</div>
											<ArrowRight />
										</div>
										<p className='text-[#9CA3AF] text-[13px] overflow-ellipsis'>
											{result.bank[0].accountNumber}
										</p>
									</div>
								))
							) : (
								<p className='text-white text-center mt-4'>Add recipient...</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipientModal
