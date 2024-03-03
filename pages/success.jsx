import Head from 'next/head'
import React from 'react'
import { HeaderHyfen } from '../components/HeaderHyfen'
import Success from '../components/Icons-V2/Success'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { formatNumber } from 'utils/helper'
import Image from 'next/image'

export default function BuyCrypto() {
	const router = useRouter()
	const { currentSelectedCoin } = useSelector((state) => state.user)
	console.log(currentSelectedCoin)
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background flex justify-center items-center'>
				{/* Container */}
				<HeaderHyfen />
				<div className='flex flex-col justify-center items-center gap-y-6'>
					<Success />
					<div className='flex gap-x-3 items-center'>
						<p className='text-[20px] font-bold text-white'>
							Success! You have sold {currentSelectedCoin?.cryptoValue}{' '}
							{currentSelectedCoin?.name}
						</p>
						<Image
							width={30}
							height={30}
							src={currentSelectedCoin?.imgUrl}
							alt='walao'
							className='w-10 h-10 rounded-full'
						/>
					</div>
					<div className='flex gap-x-3 items-center'>
						<Image
							width={30}
							height={30}
							src={currentSelectedCoin?.providerImgUrl}
							alt='walao'
							className='w-10 h-10 rounded-full'
						/>
						<p className='text-[#9CA3AF]'>
							{currentSelectedCoin?.accountName} will receive{' '}
							{formatNumber(currentSelectedCoin?.idrValue ?? '')} IDR in
							approximately 1 minute
						</p>
					</div>

					<a
						onClick={() => router.push('/hyfen-ramp')}
						className='cursor-pointer px-[24px] py-[16px] border border-[#2EB4ED] rounded-[10px] text-[#2EB4ED]'
					>
						Return to Home
					</a>
				</div>
			</main>
		</>
	)
}
