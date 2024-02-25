import React, { forwardRef } from 'react'

const LockOff = forwardRef(function LockOff({ className, ...props }, ref) {
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
			<path
				d='M17 11.7109H7C5.89543 11.7109 5 12.6064 5 13.7109V19.7109C5 20.8155 5.89543 21.7109 7 21.7109H17C18.1046 21.7109 19 20.8155 19 19.7109V13.7109C19 12.6064 18.1046 11.7109 17 11.7109Z'
				stroke='#43466D'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 17.7109C12.5523 17.7109 13 17.2632 13 16.7109C13 16.1587 12.5523 15.7109 12 15.7109C11.4477 15.7109 11 16.1587 11 16.7109C11 17.2632 11.4477 17.7109 12 17.7109Z'
				stroke='#43466D'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 11.7109V7.71094C8 6.65007 8.42143 5.63266 9.17157 4.88251C9.92172 4.13236 10.9391 3.71094 12 3.71094C13.0609 3.71094 14.0783 4.13236 14.8284 4.88251C15.5786 5.63266 16 6.65007 16 7.71094V11.7109'
				stroke='#43466D'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
})

export default LockOff
