import React, { forwardRef } from 'react'

export const IconArrowLeft = forwardRef(function IconArrowLeft(
	{ className, ...props },
	ref
) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width='16'
			height='14'
			viewBox='0 0 16 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.02344 7.24688L14.5234 7.24688'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.46875 12.6693L1.02375 7.2477L6.46875 1.8252'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})
