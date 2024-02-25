import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Image from 'next/image'

export default function EasiestWay() {
	const { t } = useTranslation('home')
	// /images/home/join-community-mobile-bg.png
	return (
		<div className='relative px-0 mx-auto container max-w-7xl my-14 py-0 lg:mt-[120px]'>
			{/* Container Content */}
			<div className='relative flex justify-center items-center w-full h-[65vh] md:h-[400px]'>
				{/* Image background */}
				{/* Dekstop */}
				<div className='hidden md:block absolute top-0 h-full w-full'>
					<Image
						src='/images/community-bg.png'
						alt='Community Background'
						layout='fill'
						className='rounded-2xl'
						objectFit='cover'
						priority
					/>
				</div>
				{/* Mobile */}
				<div className='md:hidden absolute top-0 h-full w-full'>
					<Image
						src='/images/home/join-community-mobile-bg.png'
						alt='Community Background'
						layout='fill'
						className='object-cover'
						objectFit='cover'
						priority
					/>
				</div>

				<div className='relative z-0 flex flex-col gap-2 text-center justify-center items-center'>
					<Fade top>
						<p className='font-bold text-[28px] md:text-[48px] text-center'>
							{t('home:Join Community')}
						</p>
					</Fade>
					<Fade top delay={200}>
						<Link legacyBehavior href='/community' passHref>
							<a className='header__download-button text-center text-slate-900 bg-white py-3 px-11 inline-block text-base font-bold cursor-pointer'>
								{t('home:Learn More')}
							</a>
						</Link>
					</Fade>
				</div>
			</div>
		</div>
	)
}
