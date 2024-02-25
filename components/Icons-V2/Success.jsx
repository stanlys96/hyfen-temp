import React, { forwardRef } from 'react'

const Success = forwardRef(function Success({ className }) {
	return (
		<svg
			className={className}
			width='124'
			height='124'
			viewBox='0 0 124 124'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='62'
				cy='62'
				r='60'
				fill='#62C886'
				fillOpacity='0.2'
				stroke='#5FD788'
				strokeWidth='4'
			/>
			<path
				d='M43.334 61.9998L56.6673 75.3332L83.334 48.6665'
				stroke='#5FD788'
				strokeWidth='8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})

export default Success
