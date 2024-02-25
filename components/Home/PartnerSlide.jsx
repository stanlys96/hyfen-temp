import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function PartnerSlide() {
	const { t } = useTranslation('home')
	const logos = [
		{
			image: '/images/logos/logo1.png',
			alt: 'logo partner',
			width: 197,
			height: 104,
		},
		{
			image: '/images/logos/logo2.png',
			alt: 'logo partner',
			width: 338,
			height: 73,
		},
		{
			image: '/images/logos/logo3.png',
			alt: 'logo partner',
			width: 309,
			height: 51,
		},
		{
			image: '/images/logos/logo11.png',
			alt: 'logo partner',
			width: 468,
			height: 184,
		},
		{
			image: '/images/logos/logo5.png',
			alt: 'logo partner',
			width: 242,
			height: 140,
		},
		{
			image: '/images/logos/logo6.png',
			alt: 'logo partner',
			width: 235,
			height: 146,
		},
		{
			image: '/images/logos/logo7.png',
			alt: 'logo partner',
			width: 234,
			height: 132,
		},
		{
			image: '/images/logos/logo8.png',
			alt: 'logo partner',
			width: 234,
			height: 136,
		},
		{
			image: '/images/logos/logo9.png',
			alt: 'logo partner',
			width: 528,
			height: 101,
		},
		{
			image: '/images/logos/logo10.png',
			alt: 'logo partner',
			width: 256,
			height: 184,
		},
	]
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		className: 'text-center',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					dots: false
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
					centerMode: true,
					centerPadding: '20px',
				},
			},
		],
	}
	return (
		<div className='pt-[97px] md:pt-[120px]'>
			<div className='partner-slider mt-10'>
				<Fade bottom>
					<h2 className='text-center pb-6 mb-[70px] text-xl md:text-4xl font-bold'>
						{t('Game Partners')}
					</h2>
				</Fade>
				<Fade bottom>
					<div className='bg-purple-1 py-3'>
						<div className='bg-purple-1 py-3'>
							<div className='bg-purple-2 py-3'>
								<Slider {...settings}>
									{logos.map((item, index) => {
										return (
											<div key={index} className='flex items-end justify-center'>
												<div className="px-2 md:px-5 pr-10">
													<Image
														src={item.image}
														className='block py-2 max-w-full'
														width={item.width}
														height={item.height}
														alt={item.alt}
														layout='intrinsic'
														quality={100}
													/>
												</div>
											</div>
										)
									})}
								</Slider>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	)
}
