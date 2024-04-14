import Head from 'next/head'
import React from 'react'
import Copy from '../components/Icons-V2/Copy'
import { HeaderHyfen } from '../components/HeaderHyfen'
import { useSelector } from 'react-redux'
import { formatNumber } from '../utils/helper'
import Image from 'next/image'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.close
	},
})

export default function BuyCrypto() {
	const { currentSelectedOnrampCoin, onrampResult } = useSelector(
		(state) => state.user
	)
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative min-h-[100vh] md:h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen />
				<div className='relative h-full max-w-7xl container mx-auto flex md:flex-row flex-col gap-x-5 justify-center items-center h-full pt-[15vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] w-[90vw] md:w-[436px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold md:text-left text-center'>
								Send crypto to
							</p>
							<div>
								<div className='flex justify-between md:flex-row flex-col items-center mt-4'>
									<p className='text-white'>You will receive</p>
									<div className='flex gap-x-2 items-center'>
										<p className='text-white'>
											{formatNumber(onrampResult?.cryptoValue ?? '0')}{' '}
											{onrampResult?.cryptoName ?? ''}
										</p>
										<Image
											width={30}
											height={30}
											src={currentSelectedOnrampCoin?.logo}
											alt={currentSelectedOnrampCoin?.cryptoName}
											className='rounded-full'
										/>
									</div>
								</div>
								<div className='flex justify-between md:flex-row flex-col items-center mt-4'>
									<p className='text-white'>Send to</p>
									<p className='text-white'>
										{onrampResult?.address.slice(0, 5) +
											'...' +
											onrampResult?.address.slice(37)}
									</p>
								</div>
								<div className='flex justify-between md:flex-row flex-col items-center mt-4'>
									<p className='text-white'>Network</p>
									<div className='flex gap-x-2 items-center'>
										<p className='text-white'>
											{currentSelectedOnrampCoin?.network?.[0]?.toUpperCase() +
												currentSelectedOnrampCoin?.network?.slice(1)}{' '}
											Network
										</p>
										<Image
											width={30}
											height={30}
											src={`/img/${currentSelectedOnrampCoin?.network}.png`}
											alt={currentSelectedOnrampCoin?.network}
											className='rounded-full'
										/>
									</div>
								</div>
							</div>
							<p className='text-white mt-4 text-[20px] text-center md:text-left text-bold'>
								Payment method
							</p>
							{/* <p className='text-[#9CA3AF] mt-3'>Pay Before:</p>
							<div className='bg-[#FFFFFF15] p-[12px] rounded-[10px] text-white mt-4 w-fit'>
								04:48 p.m. on 01 February 2024
							</div> */}
							<p className='text-[#9CA3AF] text-center md:text-left mt-3'>
								Chosen Bank
							</p>
							<div className='flex gap-x-3 items-center md:flex-row flex-col items-center mt-3'>
								<Image
									width={30}
									height={30}
									src={onrampResult?.bankLogo}
									alt={onrampResult?.bankName}
									className='rounded-full'
								/>
								<p className='text-white'>{onrampResult?.bankName}</p>
							</div>
							<p className='text-[#9CA3AF] mt-3 text-center md:text-left'>
								Total Amount
							</p>
							<div className='flex gap-x-2 mt-2 justify-center md:justify-start'>
								<p className='text-white'>
									{formatNumber(onrampResult?.idrValue ?? '0')} IDR
								</p>
								<Copy className='cursor-pointer' />
							</div>
						</div>
					</div>
					<div className='relative h-full flex flex-col md:mt-0 mt-[40px] md:pb-0 pb-[150px] justify-start items-start'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>How To Pay</p>
							<div className='border border-[#FFFFFF4D] px-[12px] py-[20px] md:w-[436px] rounded-[11px] flex flex-col gap-y-4 justify-center mt-[15px]'>
								<div className='flex gap-x-4 items-center'>
									<p className='font-normal text-white'>
										1. Go to your {onrampResult?.bankName} application
									</p>
								</div>
								{onrampResult?.group === 'ewallet' ? (
									<div className='flex gap-x-4 items-center'>
										<p className='font-normal text-white'>
											2. Use your phone number{' '}
											<CopyToClipboard
												text={onrampResult?.phoneNumber}
												onCopy={() => {
													Toast.fire({
														icon: 'success',
														title: 'Copied successfully!',
													})
												}}
											>
												<span className='underline cursor-pointer flex-1'>
													{onrampResult?.phoneNumber}
												</span>
											</CopyToClipboard>{' '}
											to pay in the application
										</p>
									</div>
								) : (
									<div className='items-center'>
										<p className='font-normal text-white'>
											2. Use your virtual account number{' '}
											<CopyToClipboard
												text={onrampResult?.vaNumber}
												onCopy={() => {
													Toast.fire({
														icon: 'success',
														title: 'Copied successfully!',
													})
												}}
											>
												<span className='underline cursor-pointer flex-1'>
													{onrampResult?.vaNumber}
												</span>
											</CopyToClipboard>{' '}
											to pay in the application
										</p>
									</div>
								)}

								{/* <ArrowRight className='fill-current h-4 ' /> */}
							</div>
							{/* <div className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'>
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
							</div> */}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
