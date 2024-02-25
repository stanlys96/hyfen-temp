import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import Section from '../Common/Section'

export default function CrossPlatform() {
	const { t } = useTranslation('home')
	return (
		<Section size='xl'>
			<div className='overflow-hidden'>
				<div className='container mx-auto partner-slider'>
					<Fade top>
						<h2 className='section-title'>{t('cross_platform')}</h2>
					</Fade>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						<Fade left>
							<div className='relative pb-8 flex flex-col items-center grow justify-center w-full'>
								<div className='absolute top-0 left-0 w-full h-full product-platform__item z-0'></div>
								<div className='w-full h-full z-10 text-center'>
									<Image
										src='/images/platform-player.png'
										alt='platform-player'
										layout='fixed'
										width='230'
										height='230'
										quality={100}
									/>
									<h5 className='text-lg md:text-xl font-bold'>
										{t('for_players')}
									</h5>
									<p className='text-xs md:text-sm py-4 max-w-xs mx-auto opacity-80'>
										{t('cross_des1')}.
									</p>
									<Link legacyBehavior passHref href='/players'>
										<div className='header__download-button hover:text-black-100 transition hover:bg-white py-3 px-11 inline-block text-xs md:text-sm font-bold cursor-pointer'>
											{t('GET STARTED')}
										</div>
									</Link>
								</div>
							</div>
						</Fade>
						<Fade right>
							<div className='relative pb-8 flex flex-col items-center grow justify-center'>
								<div className='absolute top-0 left-0 w-full h-full product-platform__item z-0'></div>
								<div className='w-full h-full z-10 text-center'>
									<Image
										src='/images/platform-guilds.png'
										alt='platform-player'
										layout='fixed'
										width='230'
										height='230'
									/>
									<h5 className='text-lg md:text-xl font-bold'>
										{t('for_guilds')}
									</h5>
									<p className='text-xs md:text-sm py-4 max-w-xs mx-auto opacity-80'>
										{t('cross_des2')}.
									</p>
									<Link legacyBehavior passHref href='guilds'>
										<div className='header__download-button hover:text-black-100 transition hover:bg-white py-3 px-11 inline-block text-xs md:text-sm font-bold cursor-pointer'>
											{t('GET STARTED')}
										</div>
									</Link>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</Section>
	)
}
