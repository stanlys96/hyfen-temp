import React, { useMemo } from 'react'
import Image from 'next/image'

const EcoSystemBox = ({
	icon,
	title,
	description,
	background,
	size,
	withBorder = false,
	className,
}) => {
	const bg = useMemo(() => {
		if (!withBorder) {
			if (background === 'purple') return 'purple-transparent'
			if (background === 'blue') return 'blue-transparent'
		} else {
			if (background === 'purple') return 'purple-transparent-full-border'
			if (background === 'blue') return 'blue-transparent-full-border'
		}
		return

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [background])

	const titleSize = useMemo(() => {
		if (size === 'lg') return 'text-base md:text-xl'
		if (size === 'fairFunSimple') return 'text-[20px] md:text-[28px]'
		return 'text-base'
	}, [size])

	const descriptionSize = useMemo(() => {
		if (size === 'lg') return 'text-sm'
		return 'text-[14px] md:text-[16px]'
	}, [size])

	return (
		<div className={`eco-item-wrapper flex ${bg} ${className}`}>
			<div className='eco-item pt-[80px] md:pt-[80px] pb-8 px-4 text-center w-full'>
				<span className='eco-item-player__image'>
					<Image
						src={icon}
						className='block py-2'
						width='100%'
						height='100%'
						alt='eco-systems'
						layout='responsive'
						quality={100}
					/>
				</span>
				<h5 className={`${titleSize} font-bold`}>{title}</h5>
				<p
					className={`${descriptionSize} mt-4 opacity-80 tracking-wide px-4 text-center`}
				>
					{description}
				</p>
			</div>
		</div>
	)
}

export default EcoSystemBox
