import ArrowLeft from './Icons/ArrowLeft'
import { RoninBig } from './Icons-V2/Hyfen-V2'
import { ArrowRight } from './Icons'

function PaymentMethodModal({ showModal, setShowModal }) {
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
							<p className='text-center text-white'>Payment Method</p>
						</div>
					</div>
					<div className='bg-[#080F5AE5] px-[29px] py-[2px] rounded-b-[10px]'>
						<div className='cursor-pointer flex gap-x-4 justify-between items-center my-5'>
							<div className='flex gap-x-4 items-center'>
								<RoninBig />
								<div>
									<p className='font-bold text-[14px] text-white'>BCA</p>
								</div>
							</div>
							<ArrowRight />
						</div>
						<div className='cursor-pointer flex gap-x-4 justify-between items-center my-5'>
							<div className='flex gap-x-4 items-center'>
								<RoninBig />
								<div>
									<p className='font-bold text-[14px] text-white'>Mandiri</p>
								</div>
							</div>
							<ArrowRight />
						</div>
						<div className='cursor-pointer flex gap-x-4 justify-between items-center my-5'>
							<div className='flex gap-x-4 items-center'>
								<RoninBig />
								<div>
									<p className='font-bold text-[14px] text-white'>Maybank</p>
								</div>
							</div>
							<ArrowRight />
						</div>
						<div className='cursor-pointer flex gap-x-4 justify-between items-center my-5'>
							<div className='flex gap-x-4 items-center'>
								<RoninBig />
								<div>
									<p className='font-bold text-[14px] text-white'>BRI</p>
								</div>
							</div>
							<ArrowRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentMethodModal
