import React from 'react'
import HeroAbout from './HeroAbout'
import AboutContent from './AboutContent'

export default function About() {
	return (
		<div className='relative w-full h-full overflow-hidden'>
			<div className='relative'>
				<HeroAbout />
			</div>
			<AboutContent />
		</div>
	)
}
