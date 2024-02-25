import Head from 'next/head'
import React from 'react'
import { ArrowRight } from '../components/Icons'
import { RoninBig } from '../components/Icons-V2/Hyfen-V2'
import Copy from '../components/Icons-V2/Copy'
import { HeaderHyfen } from '../components/HeaderHyfen'

export default function BuyCrypto() {
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen />
				<div className='relative h-full max-w-7xl container mx-auto flex gap-x-5 justify-center items-center h-full pt-[15vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] w-[436px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>Send crypto to</p>
							<div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>You will receive</p>
									<p className='text-white'>1,000 SLP</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>Send to</p>
									<p className='text-white'>0x1234...5789</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>Network</p>
									<p className='text-white'>Ronin Network</p>
								</div>
							</div>
							<p className='text-white mt-4 text-[20px] text-bold'>
								Payment method
							</p>
							<p className='text-[#9CA3AF] mt-3'>Pay Before:</p>
							<div className='bg-[#FFFFFF15] p-[12px] rounded-[10px] text-white mt-4 w-fit'>
								04:48 p.m. on 01 February 2024
							</div>
							<p className='text-[#9CA3AF] mt-3'>Chosen Bank</p>
							<div className='flex gap-x-3 items-center mt-3'>
								<RoninBig />
								<p className='text-white'>Bank Digital BCA</p>
							</div>
							<p className='text-[#9CA3AF] mt-3'>Pay Before:</p>
							<div className='flex gap-x-2 mt-2'>
								<p className='text-white'>58129380123</p>
								<Copy className='cursor-pointer' />
							</div>
							<p className='text-[#9CA3AF] mt-3'>Total Amount</p>
							<div className='flex gap-x-2 mt-2'>
								<p className='text-white'>60,000 IDR</p>
								<Copy className='cursor-pointer' />
							</div>
						</div>
					</div>
					<div className='relative h-full flex flex-col justify-start items-start'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>How To Pay</p>
							<div className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'>
								<div className='flex gap-x-4 items-center'>
									<p className='font-normal text-white'>Option 1</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
							<div className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'>
								<div className='flex gap-x-4 items-center'>
									<p className='font-normal text-white'>Option 2</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
							<div className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'>
								<div className='flex gap-x-4 items-center'>
									<p className='font-normal text-white'>Option 3</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
