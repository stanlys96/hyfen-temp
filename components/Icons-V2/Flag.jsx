import React, { forwardRef } from 'react'

export const Flag = forwardRef(function Flag({ className, ...props }, ref) {
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
			<g clipPath='url(#clip0_7861_10007)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M6 16.3333L6 4.33325L17.496 4.33325C19.6072 4.33325 20.7685 6.78865 19.4279 8.4203L17.8562 10.3333L19.4279 12.2462C20.7685 13.8779 19.6072 16.3333 17.496 16.3333H6ZM8 14.3333H17.496C17.9186 14.3333 18.1505 13.8419 17.8826 13.5158L16.3109 11.6029C15.7047 10.865 15.7046 9.80149 16.3109 9.06361L17.8826 7.15066C18.1505 6.82459 17.9186 6.33325 17.496 6.33325L8 6.33325L8 14.3333Z'
					fill='white'
				/>
				<path
					d='M7 2.33325C6.44772 2.33325 6 2.78097 6 3.33325V20.3333H5C4.44772 20.3333 4 20.781 4 21.3333C4 21.8855 4.44772 22.3333 5 22.3333H9C9.55228 22.3333 10 21.8855 10 21.3333C10 20.781 9.55228 20.3333 9 20.3333H8V3.33325C8 2.78097 7.55228 2.33325 7 2.33325Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_7861_10007'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0 0.333252)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
})
