import Head from 'next/head'
import React from 'react'
import { HeaderHyfen } from '../components/HeaderHyfen'
import Success from '../components/Icons-V2/Success'
import { useRouter } from 'next/router'

export default function BuyCrypto() {
	const router = useRouter()
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
					<p className='text-[20px] font-bold text-white'>
						Success! You have bought 1000 SLP
					</p>
					<p className='text-[#9CA3AF]'>Crypto sent to 0x...412380</p>
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
