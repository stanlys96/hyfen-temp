import React from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function GameFiSlick() {
	const { t } = useTranslation('home')
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					infinite: false,
					centerMode: true,
					centerPadding: '20%',
				},
			},
		],
	}

	const items = [
		{
			title: t('Play'),
			description: t('Players_desc')
		},
		{
			title: t('Earn'),
			description: t('Guilds_desc')
		},
		{
			title: t('Enjoy'),
			description: t('Enjoy_desc')
		}
	]

	return (
		<div 
			className='container mx-auto gamefi pt-[93px] md:pt-[200px] pb-[140px]'
		>
			<Fade top>
				<h2 className='section-title'>
					{t('home:Changing People’s Lives Through GameFi')}.
				</h2>
			</Fade>
			<Slider {...settings}>
				{items.map((item, i) => (
					<div 
						className={`${i+1 !== items.length && "sm:pr-7"} h-full`}
						key={i}
					>
						<Fade
							top
							delay={i !== 0 ? i * 200 : 0}
						>
							<div className='relative px-[30px] pb-14 pt-10'>
								<div className='absolute top-0 left-0 w-full h-full GameFiItem'></div>
								<div>
									<div className='flex items-center mb-6'>
										<h1 className='text-6xl md:text-[120px] opacity-20 font-bold'>{i+1}</h1>
										<h2 className='text-2xl md:text-3xl ml-5 font-bold'>
											{item.title}
										</h2>
									</div>
									<p style={{fontSize: '14px'}} className='text-xs md:text-base opacity-80'>
										{item.description}.
									</p>
								</div>
							</div>
						</Fade>
					</div>
				))}
			</Slider>
		</div>
	)
}
