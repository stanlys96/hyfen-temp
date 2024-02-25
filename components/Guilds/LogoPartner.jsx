import Image from 'next/image'
import React from 'react'

export default function LogoPartner() {
	return (
		<div className='container pt-12 mx-auto mt-14 mb-14'>
			<h5 className='text-lg md:text-2xl text-center mb-10'>Trusted by Notable Guilds</h5>
			<Image
				src='/images/logo-partner.png'
				layout='responsive'
				width='939'
				height='119'
				alt='logo partner'
				quality={100}
			/>
		</div>
	)
}
