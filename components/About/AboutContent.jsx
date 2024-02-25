import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { investorsData } from '../../mock/about'
import { Fade } from 'react-reveal'
import Link from 'next/link'
import Tilt from 'react-tilt'

function AboutContent() {
	const { t } = useTranslation('about')
	return (
		<div className='about-content pt-12 xl:pt-24 lg:pb-24'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4'>
					<Fade left>
						<p className='col-span-1 text-[32px] text-center md:text-left mb-10 md:mb-0'>
							{t('About')}
						</p>
					</Fade>
					<Fade right>
						<div className='col-span-1 md:col-span-3 text-[16px] tracking-wide flex flex-col gap-2 pr-2 lg:pr-24'>
							<p className='text-white'>{t('About_desc1')}</p>
							<p className='text-white my-5'>{t('About_desc2')}</p>
							<p className='text-white'>{t('About_desc3')}</p>
						</div>
					</Fade>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-4 mt-[124px]'>
					<Fade left>
						<h1 className='text-3xl col-span-1 text-center md:text-left'>
							{t('Investors')}
						</h1>
					</Fade>
					<div className='col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 mt-[52px] lg:-mt-6'>
						{investorsData.map((data, index) => (
							<Tilt key={index}>
								<Fade top delay={index !== 0 ? index * 200 : 0}>
									<Link legacyBehavior href={data.link} passHref>
										<a
											target='_blank'
											rel='noreferrer'
											className='investor-img-container flex justify-center cursor-pointer'
										>
											<Image
												src={`/images/${data.imageUrl}`}
												className='ml-5'
												width={231}
												height={128}
												alt={`${data.title}`}
												layout='intrinsic'
												quality={100}
											/>
										</a>
									</Link>
								</Fade>
							</Tilt>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutContent
