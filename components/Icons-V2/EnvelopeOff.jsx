import React, { forwardRef } from 'react'

export const EnvelopeOff = forwardRef(function EnvelopeOff(
	{ className, ...props },
	ref
) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width='24'
			height='25'
			viewBox='0 0 20 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M17 1.711H3C1.89543 1.711 1 2.60643 1 3.711V13.711C1 14.8156 1.89543 15.711 3 15.711H17C18.1046 15.711 19 14.8156 19 13.711V3.711C19 2.60643 18.1046 1.711 17 1.711Z'
				stroke='#43466D'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1 3.71094L10 9.71094L19 3.71094'
				stroke='#43466D'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})
