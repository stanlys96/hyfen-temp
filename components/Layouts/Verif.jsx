import { Envelope } from '../Icons-V2'
import HeadingAuth from '../molecules/HeadingAuth'
import { Key } from '../Icons-V2/Hyfen-V2/Key'
import Head from 'next/head'
import React from 'react'
import { Wallet } from '../Icons-V2/Hyfen-V2/Wallet'

export default function Verif({
	children,
	title,
	icon,
	heading,
	desc,
	desc2,
	withIcon = true,
}) {
	return (
		<>
			<Head>
				<title>Hyfen Tools | {title}</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<div className='relative h-full max-w-7xl container mx-auto'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-center items-center'>
						{/* Icon  */}
						{withIcon && (
							<div className='relative flex justify-center p-4 items-center h-[82px] w-[82px] rounded-full bg-app-shade/40'>
								{icon === 'email' ? (
									<Envelope width='52' height='52' />
								) : icon === 'key' ? (
									<Key width='52' height='52' />
								) : (
									<Wallet width='52' height='52' />
								)}
							</div>
						)}

						{/* Text and Description */}
						<HeadingAuth
							className='text-center mt-[30px]'
							heading={heading ?? ''}
							desc={desc ?? ''}
							desc2={desc2 ?? ''}
							classDesc='text-white'
						/>

						{/* Children Section */}
						{children}
					</div>
				</div>
			</main>
		</>
	)
}
