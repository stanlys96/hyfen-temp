import React, { forwardRef } from 'react'

export const Eye = forwardRef(function Eye({ className, ...props }, ref) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_8141_1065)'>
				<path
					d='M22.4415 12.4564C21.3976 10.3437 19.9439 8.65518 18.2366 7.50124C16.5293 6.33882 14.5683 5.71094 12.5 5.71094H12.4902C8.36341 5.71094 4.64634 8.23094 2.55854 12.4564C2.48049 12.6176 2.48049 12.8043 2.55854 12.957C4.64634 17.1825 8.36341 19.7109 12.4902 19.7109H12.5C16.6366 19.7109 20.3537 17.1825 22.4415 12.957C22.5195 12.8043 22.5195 12.6176 22.4415 12.4564'
					stroke='white'
					strokeWidth='2'
				/>
				<circle cx='12.5' cy='12.7109' r='2' stroke='white' strokeWidth='2' />
			</g>
			<defs>
				<clipPath id='clip0_8141_1065'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0 0.710938)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
})
