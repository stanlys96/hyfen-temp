import Image from 'next/image'
import React from 'react'

export default function CrossPlatform() {
	return (
		<div className='container mx-auto py-3 mt-6 partner-slider'>
			<h2 className='text-center py-8'>Cross-platform Products</h2>
			<div className='md:flex justify-between md:space-x-8'>
				<div className='product-platform__item py-8 flex flex-col items-center grow justify-center'>
					<Image
						src='/images/platform-player.png'
						alt='platform-player'
						layout='fixed'
						width='242'
						height='242'
					/>
					<h5>FOR PLAYERS</h5>
					<p>
						Start earning with only a mobile phone and an internet connection.
					</p>
					<a
						href='/'
						target='_blank'
						className='header__download-button flex items-center mt-3 py-1 px-4 ml-3'
					>
						GET STARTED
					</a>
				</div>
				<div className='product-platform__item py-8 flex flex-col items-center grow justify-center'>
					<Image
						src='/images/platform-guilds.png'
						alt='platform-player'
						layout='fixed'
						width='242'
						height='242'
					/>
					<h5>FOR GUILDS</h5>
					<p>Cutting-edge tools and data-driven insights in one screen..</p>
					<a
						href='/'
						target='_blank'
						className='header__download-button flex items-center mt-3 py-1 px-4 ml-3'
					>
						GET STARTED
					</a>
				</div>
			</div>
		</div>
	)
}
