import Image from 'next/image'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import ScrollDown from '../Common/ScrollDown'

function SideBar() {
	const { t } = useTranslation('players')
	return (
		<div className='soft-shadow z-20 relative md:px-0 overflow-hidden'>
			<div className='container mx-auto pt-[176px] md:pt-[110px] pb-[150px] md:pb-[120px]'>
				<div className='grid grid-cols-12'>
					<div className='flex col-span-12 md:col-span-7 justify-center md:justify-start'>
						<div className='mb-5 md:mt-[55px] md:mb-0'>
							<Fade top>
								<div className='mb-[30px]'>
									<h1 className='text-2xl lg:text-[64px] text-center md:text-left lg:mb-8 font-bold'>
										{t('start_earn')},
									</h1>
									<h1 className='text-2xl lg:text-[64px] text-center md:text-left font-bold'>
										{t('start_earn2')}.
									</h1>
								</div>
							</Fade>
							<Fade top>
								<div className='mb-[30px]'>
									<div className='text-center md:text-left text-sm md:text-base opacity-80'>
										{t('rent1')}
									</div>
									<div className='text-center md:text-left text-sm md:text-base opacity-80'>
										{t('rent2')}.
									</div>
								</div>
							</Fade>

							<div className='text-center md:text-left'>
								<Fade bottom delay={600}>
									<div
										className='mt-7 mb-10'
										style={{
											display: 'flex',
											flexDirection: 'column',
										}}
									>
										<div className='mb-4 text-center lg:text-left'>
											<a
												href='https://apps.apple.com/us/app/metabase-play/id1624878820'
												className='btn bg-blue hover:bg-hover px-8 py-4 text-sm md:text-base text-black-100'
												style={{
													display: 'flex',
													alignItems: 'center',
													maxWidth: 325,
												}}
											>
												<Image
													alt='img'
													src='/images/apple.svg'
													height={25}
													width={20}
												/>
												<p style={{ marginLeft: 15 }}>
													{t('common:Download App on IOS')}
												</p>
											</a>
										</div>
										<div className='mb-4 text-center lg:text-left'>
											<a
												href='https://play.google.com/store/apps/details?id=com.metabase.gg'
												className='btn bg-blue hover:bg-hover px-8 py-4 text-sm md:text-base text-black-100'
												style={{
													display: 'flex',
													alignItems: 'center',
													maxWidth: 325,
												}}
											>
												<Image
													src='/images/android.svg'
													height={27}
													alt='android'
													width={23}
												/>
												<p style={{ marginLeft: 15 }}>
													{t('common:Download App on Android')}
												</p>
											</a>
										</div>
									</div>
									<ScrollDown className='justify-center md:justify-start' />
								</Fade>
							</div>
						</div>
					</div>
					<div className='flex w-full col-span-12 md:col-span-5 justify-center md:justify-center'>
						<div className='pl-0 w-full md:pl-10 relative'>
							<div className='w-full h-auto relative'>
								<Fade right delay={600}>
									<Image
										src='/images/phone-hd.png'
										alt='googleplay'
										layout='responsive'
										quality={100}
										width='100%'
										height='140'
										objectFit='contain'
									/>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { SideBar }
