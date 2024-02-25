import React, { forwardRef } from 'react'

export const Envelope = forwardRef(function Envelope(
	{ className, ...props },
	ref
) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width={props.width ?? '24'}
			height={props.height ?? '25'}
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_7861_10568)'>
				<path
					d='M19 5.711H5C3.89543 5.711 3 6.60643 3 7.711V17.711C3 18.8156 3.89543 19.711 5 19.711H19C20.1046 19.711 21 18.8156 21 17.711V7.711C21 6.60643 20.1046 5.711 19 5.711Z'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M3 7.711L12 13.711L21 7.711'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_7861_10568'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0 0.710999)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
})
