import React, { useState, useEffect } from 'react'

/* eslint-disable */
const HomeBanner = () => {
	const [activeAnimation, setActiveAnimation] = useState(0)

	useEffect(() => {
		if (activeAnimation === 0) {
			setActiveAnimation(1)
		}
		const changeInterval = setInterval(
			() => {
				if (activeAnimation === 3) {
					setActiveAnimation(1)
				} else {
					setActiveAnimation(activeAnimation + 1)
				}
			},
			activeAnimation === 'all' ? 5000 : 3000
		)
		return () => {
			clearInterval(changeInterval)
		}
	}, [activeAnimation])

	return (
		<div className='overflow-hidden'>
			<div className='max-w-[1440px] mx-auto pt-12 h-[510px] md:h-[605px]'>
				<div className='relative ml-auto text-right h-full'></div>
			</div>
		</div>
	)
}

export default HomeBanner
