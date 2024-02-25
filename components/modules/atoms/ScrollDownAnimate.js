import React from 'react'

export default function ScrollDownAnimate({ className }) {
	return (
		<div className={`flex items-center gap-x-3 ${className}`}>
			<div className='scroll-down' />
			<span className='text-sm text-gray'>Scroll Down</span>
		</div>
	)
}
