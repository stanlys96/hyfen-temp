import Head from 'next/head'
import React from 'react'
import Copy from '../components/Icons-V2/Copy'
import { HeaderHyfen } from '../components/HeaderHyfen'
import { useSelector } from 'react-redux'
import { formatNumber } from '../utils/helper'
import Image from 'next/image'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'
import {
	currencyList,
	chainData,
	onrampPaymentMethod,
	AVAILABLE_TOKENS,
} from '../utils/helper'

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

export default function OfframpResult() {
	const { currentSelectedOnrampCoin, onrampResult, offrampResult } =
		useSelector((state) => state.user)
	console.log(offrampResult)
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen />
				<div className='relative h-full w-full container mx-auto flex gap-x-5 justify-center items-center h-full pt-[15vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] w-full md:w-[700px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold text-center'>
								Send crypto to
							</p>
							<div>
								<div className='flex md:flex-row flex-col items-center justify-between mt-4'>
									<p className='text-white'>You will receive</p>
									<div className='flex gap-x-2 items-center'>
										<p className='text-white md:text-[16px] '>
											{formatNumber(
												offrampResult?.outputAmountExact?.toFixed(2) ?? '0'
											)}{' '}
											{offrampResult?.outputCurrency ?? ''}
										</p>
										<Image
											width={30}
											height={30}
											src={
												currencyList?.find(
													(data) =>
														data.currency === offrampResult?.outputCurrency
												)?.logo ?? ''
											}
											alt={currentSelectedOnrampCoin?.cryptoName}
											className='rounded-full'
										/>
									</div>
								</div>
								<div className='flex md:flex-row flex-col items-center justify-between mt-4'>
									<p className='text-white'>Send to</p>
									<CopyToClipboard
										text={offrampResult?.payOutWallet}
										onCopy={() => {
											Toast.fire({
												icon: 'success',
												title: 'Copied successfully!',
											})
										}}
									>
										<div className='flex gap-x-2 text-[11px] md:text-[16px] items-center'>
											<p className='text-white'>
												{offrampResult?.payOutWallet}
											</p>
											<Copy className='cursor-pointer' />
										</div>
									</CopyToClipboard>{' '}
								</div>
								<div className='flex md:flex-row flex-col items-center justify-between mt-4'>
									<p className='text-white'>Send From</p>
									<p className='text-white md:text-[16px] text-[11px]'>
										{offrampResult?.sender?.walletAddress}
									</p>
								</div>
								<div className='flex justify-between md:flex-row flex-col items-center mt-4'>
									<p className='text-white'>Network</p>
									<div className='flex gap-x-2 items-center'>
										<p className='text-white'>
											{offrampResult?.blockchain?.length > 0 &&
												offrampResult?.blockchain?.[0]?.toUpperCase() +
													offrampResult?.blockchain.slice(1)}{' '}
											Network
										</p>
										<Image
											width={30}
											height={30}
											src={
												chainData?.find(
													(data) =>
														data.name.toLowerCase() ===
														offrampResult?.blockchain?.toLowerCase()
												)?.imgUrl ?? ''
											}
											alt={
												chainData?.find(
													(data) =>
														data.name.toLowerCase() ===
														offrampResult?.blockchain?.toLowerCase()
												)?.imgUrl ?? ''
											}
											className='rounded-full'
										/>
									</div>
								</div>
							</div>
							<p className='text-white mt-4 text-[16px] md:text-[20px] text-center text-bold md:text-left'>
								Payment method
							</p>
							{/* <p className='text-[#9CA3AF] mt-3'>Pay Before:</p>
							<div className='bg-[#FFFFFF15] p-[12px] rounded-[10px] text-white mt-4 w-fit'>
								04:48 p.m. on 01 February 2024
							</div> */}
							<p className='text-[#9CA3AF] mt-3 text-center md:text-left'>
								Chosen Bank
							</p>
							<div className='flex gap-x-3 items-center justify-center md:justify-start mt-3'>
								<Image
									width={30}
									height={30}
									src={
										onrampPaymentMethod?.find(
											(data) =>
												data.code.toLowerCase() ===
												offrampResult?.receiver?.bankName.toLowerCase()
										)?.image ?? ''
									}
									alt={offrampResult?.receiver?.bankName}
									className='rounded-full'
								/>
								<p className='text-white'>
									{offrampResult?.receiver?.bankName}
								</p>
								<p className='text-[#9CA3AF]'>
									{offrampResult?.receiver?.accountNumber}
								</p>
							</div>
							<p className='text-[#9CA3AF] mt-3 text-center md:text-left'>
								Total Payment
							</p>
							<div className='flex gap-x-2 mt-2 items-center justify-center md:justify-start'>
								<p className='text-white'>
									{offrampResult?.inputAmountExact ?? '0'}{' '}
									{offrampResult?.inputCurrency?.toUpperCase() ?? ''}
								</p>
								<Image
									width={30}
									height={30}
									src={
										AVAILABLE_TOKENS.find(
											(data) =>
												data.symbol.toLowerCase() ===
												offrampResult?.inputCurrency?.toLowerCase()
										)?.logoURI ?? ''
									}
									alt={offrampResult?.inputCurrency?.toLowerCase()}
									className='rounded-full'
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
