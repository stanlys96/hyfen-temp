import React from 'react'

export default function Ribbon({ className }) {
	return (
		<div
			className={[
				'absolute top-0 transition-all duration-300 text-white transform overflow-hidden text-right w-24 md:w-full h-[90%] right-0',
				className,
			].join(' ')}
		>
			<span
				className='bg-app-purple text-right transition-all duration-300 pr-5 md:pr-8 right-1 md:-right-5  w-[7rem] sm:w-[7.4rem] md:w-32 md:top-0 md:absolute'
				style={{
					fontSize: '13px',
					WebkitTransform: 'rotate(45deg)',
					transform: 'rotate(45deg)',
					// width: '135px',
					display: 'block',
				}}
			>
				Soon
			</span>
		</div>
	)
}
