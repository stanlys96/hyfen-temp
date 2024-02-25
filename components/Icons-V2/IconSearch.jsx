import React, { forwardRef } from 'react'

export const IconSearch = forwardRef(function IconSearch(
	{ className, ...props },
	ref
) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width='19'
			height='19'
			viewBox='0 0 19 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<ellipse
				cx='9.14348'
				cy='8.94958'
				rx='8.14348'
				ry='7.94958'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.8066 14.8906L17.9993 17.9992'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})
