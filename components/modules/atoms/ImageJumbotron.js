import Image from 'next/image'
import React from 'react'

export default function ImageJumbotron({ src }) {
	return (
		<div className='relative h-[500px] md:h-[700px] xl:h-[800px] w-[768px] xl:max-w-[1440px] '>
			<Image
				priority
				src={src}
				alt='image-home'
				layout='fill'
				objectFit='contain'
			/>
		</div>
	)
}
