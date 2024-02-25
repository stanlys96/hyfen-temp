import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import ScrollDown from '../Common/ScrollDown'
import Image from 'next/image'
import Link from 'next/link'
import { Ribbon } from '..//modules/molecules'

function HeroHyfenPlay() {
	const { t } = useTranslation()
	return (
		<div className='relative container mx-auto max-w-7xl pt-28 md:pt-32'>
			{/* Container Content */}
			<div className='relative grid place-items-center grid-cols-1 gap-4 lg:grid-cols-2'>
				{/* Heading, Description, and Button Download */}
				<div className='relative grid place-items-center justify-items-center md:place-items-start md:-mt-16'>
					{/* Heading */}
					<Fade top>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center  lg:text-left font-bold hyfen-play-gradient'>
							{t('hyfen-play:Hyfen Play')}
						</h1>
					</Fade>
					{/* Desription */}
					<Fade top>
						<p className='mt-4 text-center font-[400] lg:text-left text-[22px] md:text-[36px] md:pr-24 md:leading-[46px] tracking-wide'>
							{t('hyfen-play:Earn Money')}
						</p>
					</Fade>
					{/* Button Download */}
					<Fade top delay={600}>
						<div className='relative flex justify-between items-center gap-4 mt-7'>
							{/* Ios */}
							<div className='relative -mb-[0.45rem]'>
								<Image
									src='/images/App Store.svg'
									height={60}
									width={200}
									quality={100}
									alt='apple-store'
								/>
								<Ribbon />
							</div>
							{/* Android */}
							<Link
								legacyBehavior
								passHref
								href='https://play.google.com/store/apps/details?id=com.metabase.gg'
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='relative -mb-[0.45rem]'
								>
									<Image
										src='/images/Google Play.svg'
										height={60}
										width={200}
										alt='android'
									/>
								</a>
							</Link>
						</div>
					</Fade>

					{/*End Container*/}
					<div className='hidden relative md:block mt-10'>
						<ScrollDown className='relative' />
					</div>
				</div>

				{/* Image Content */}
				<Fade right delay={400}>
					{/* Image */}

					<div className='relative mt-4 md:mt-0 h-[300px] md:h-[500px] w-[1440px] '>
						<Image
							priority
							src='/images/hyfen-play/jumbotron_play.png'
							alt='image-home'
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<div className='relative block mt-4 md:hidden'>
						<ScrollDown className='relative' />
					</div>
				</Fade>
			</div>
		</div>
	)
}

export default HeroHyfenPlay
