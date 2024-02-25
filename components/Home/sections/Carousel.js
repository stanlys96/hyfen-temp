import Image from 'next/image'
import React from 'react'

export default function Carousel({
	setIndex,
	timeoutId,
	className,
	item,
	i,
	index,
}) {
	return (
		<button
			key={i}
			onClick={() => {
				setIndex(i)
				clearTimeout(timeoutId)
			}}
		>
			<div className={`${className} h-96 w-full relative `} key={item.id}>
				<Image
					src={i === index ? item.imagePhone : item.image}
					alt={item.id}
					layout='fill'
					objectFit='contain'
				/>
			</div>
		</button>
	)
}
