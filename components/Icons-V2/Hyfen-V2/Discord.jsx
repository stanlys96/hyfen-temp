import React, { forwardRef } from 'react'

export const Discord = forwardRef(function Discord(
	{ className, ...props },
	ref
) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7 16.5C10.5 17.5 13.5 17.5 17 16.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13Z'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13Z'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.5 7.5C11 6.5 13 6.5 16.5 7.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.5 17C15.5 18 17 20 17.5 20C19 20 20.333 18.333 21 17C21.667 15.333 21.5 11.167 19.5 5.5C18.043 4.485 16.5 4.16 15 4L14 6.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.50011 17C8.50011 18 7.14411 20 6.66811 20C5.23911 20 3.97011 18.333 3.33511 17C2.70011 15.333 2.85911 11.167 4.76311 5.5C6.15111 4.485 7.54511 4.16 9.00011 4L10.0001 6.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})
