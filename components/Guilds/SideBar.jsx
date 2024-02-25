import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ScrollDown from '../Common/ScrollDown'

function SideBar() {
	const { t } = useTranslation('guilds')
	return (
		<div className='soft-shadow z-20 relative md:px-0 overflow-hidden'>
			<div className='container mx-auto pt-[176px] md:pt-[162px] pb-[150px] md:pb-[205px]'>
				<div className='grid grid-cols-12 gap-y-8 lg:gap-y-0'>
					<div className='flex col-span-12 md:col-span-6 justify-center md:justify-start'>
						<div className='mb-5 md:mt-[15px] md:mb-0'>
							<Fade top>
								<div className='mb-[30px]'>
									<h1 className='text-2xl lg:text-[64px] text-center md:text-left lg:mb-8 font-bold'>
										{t('Lend NFTs')},
									</h1>
									<h1 className='text-2xl lg:text-[64px] text-center md:text-left font-bold'>
										{t('Earn Money')}.
									</h1>
								</div>
							</Fade>
							<Fade top>
								<div className='mb-[30px]'>
									<div className='text-center md:text-left text-sm md:text-base opacity-80 lg:w-[455px]'>
										{t('Use our guild management tool to monitor and')} {t('manage your passive income from lending in-game')} {t('assets (NFT) to players')}.
									</div>
								</div>
							</Fade>
							<Fade
								bottom
								delay={600}
							>
								<div className='text-center md:text-left'>
									<a
										href='https://calendly.com/metabasegg'
										className='btn mb-10 bg-blue hover:bg-hover px-8 py-4 text-sm md:text-base text-black-100 inline-block'
									>
										{t('common:Onboard Guild Now')}
									</a>
									<ScrollDown className="justify-center md:justify-start" />
								</div>
							</Fade>
						</div>
					</div>
					<div className='flex w-full col-span-12 md:col-span-6 justify-center md:justify-center'>
						<div className='w-full relative'>
							<Fade
								right
								delay={600}
							>
								<div className='w-[520px] h-[190px] md:w-[520px] md:h-[220px] xl:w-[520px] xl:h-[320px] max-w-full ml-auto relative'>
									<Image
										src='/images/dashboard-hd.png'
										alt='guildbg'
										quality={100}
										layout="fill"
									/>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
