import React, { forwardRef } from 'react'

export const Bell = forwardRef(function Bell({ className, ...props }, ref) {
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
				d='M11.9996 22C13.0996 22 13.9996 21.1 13.9996 20H9.99956C9.99956 20.5304 10.2103 21.0391 10.5854 21.4142C10.9604 21.7893 11.4691 22 11.9996 22ZM17.9996 16V11C17.9996 7.93 16.3596 5.36 13.4996 4.68V4C13.4996 3.17 12.8296 2.5 11.9996 2.5C11.1696 2.5 10.4996 3.17 10.4996 4V4.68C7.62956 5.36 5.99956 7.92 5.99956 11V16L4.70956 17.29C4.07956 17.92 4.51956 19 5.40956 19H18.5796C19.4696 19 19.9196 17.92 19.2896 17.29L17.9996 16Z'
				fill='white'
			/>
		</svg>
	)
})
