import React, { forwardRef } from 'react'

const Cross = forwardRef(function Cross({ className, ...props }) {
	return (
		<svg
			{...props}
			className={className}
			width='64'
			height='64'
			viewBox='0 0 64 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M41 41L23 23M41 23L23 41'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})

export default Cross
