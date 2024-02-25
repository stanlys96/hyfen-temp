import React, { forwardRef } from 'react'

const Phone = forwardRef(function Phone({ className, ...props }, ref) {
	return (
		<svg
			className={className}
			{...props}
			ref={ref}
			width={props.width ?? '24'}
			height={props.height ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.5 4H8.5L10.5 9L8 10.5C9.07096 12.6715 10.8285 14.429 13 15.5L14.5 13L19.5 15V19C19.5 19.5304 19.2893 20.0391 18.9142 20.4142C18.5391 20.7893 18.0304 21 17.5 21C13.5993 20.763 9.92015 19.1065 7.15683 16.3432C4.3935 13.5798 2.73705 9.90074 2.5 6C2.5 5.46957 2.71071 4.96086 3.08579 4.58579C3.46086 4.21071 3.96957 4 4.5 4'
				stroke='#55637A'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 7C15.0304 7 15.5391 7.21071 15.9142 7.58579C16.2893 7.96086 16.5 8.46957 16.5 9'
				stroke='#55637A'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 3C16.0913 3 17.6174 3.63214 18.7426 4.75736C19.8679 5.88258 20.5 7.4087 20.5 9'
				stroke='#55637A'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})

export default Phone
