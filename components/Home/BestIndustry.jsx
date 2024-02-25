import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

function BestIndustry() {
	const { t } = useTranslation('home')
	const industries = [
		{
			image: '/images/industry/IVC_S-Logo.svg',
			link: 'https://www.ivcrypto.io/',
			width: 178,
			height: 42,
		},
		{
			image: '/images//industry/Huobi.svg',
			link: 'https://www.huobi.com/en-us/capital/',
			width: 178,
			height: 22,
		},
		{
			image: '/images/industry/Artboard.svg',
			link: 'https://standardalpha.com/',
			width: 190,
			height: 39,
		},
		{
			image: '/images/industry/Morningstar.svg',
			link: 'https://morningstar.ventures/',
			width: 191,
			height: 60,
		},
		{
			image: '/images/industry/b.svg',
			link: 'https://accapital.io/',
			width: 171,
			height: 36,
		},
		{
			image: '/images/industry/Chimera.svg',
			link: 'https://www.hiveventures.io/',
			width: 176,
			height: 58,
		},
		{
			image: '/images/industry/Sea.svg',
			link: '',
			width: 161,
			height: 32,
		},
		{
			image: '/images/industry/enjin.svg',
			link: 'https://enjinstarter.com/',
			width: 183,
			height: 40,
		},
		{
			image: '/images/industry/yolo-investments.svg',
			link: 'https://yolo.io/',
			width: 152,
			height: 72,
		},
		{
			image: '/images/industry/breederdao.svg',
			link: 'https://www.breederdao.io/',
			width: 152,
			height: 72,
		},
	]

	return (
		<div className='pb-[160px]'>
			<div className='container mx-auto'>
				<h2 className='section-title-lg'>
					{t('backed_by')}
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-4'>
					{industries.map((item, index) => (
						<Fade
							key={index}
							top
							delay={index !== 0 ? index * 200 : 0}
						>
							<a
								href={item.link}
								target='_blank'
								rel='noreferrer'
								className='item-industry  px-5 py-4 md:py-6 flex items-center justify-center '
							>
								<div className='relative z-10 block w-full h-[35px] md:h-[35px] xl:h-[65px]'>
									<Image
										src={item.image}
										alt='industry'
										quality={100}
										layout="fill"
										width='100%'
										height='100%'
									/>
								</div>
							</a>
						</Fade>
					))}
				</div>
			</div>
		</div>
	)
}

export default BestIndustry
