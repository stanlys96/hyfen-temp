/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function Ambitious({ tr }) {
	const { t } = useTranslation(tr)
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		className: 'text-center',
		dots: true,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
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
					slidesToScroll: 1,
					dots: true,
					centerMode: true,
					centerPadding: '10%',
				},
			},
		],
	}

	const soscialItems = [
		{
			title: "telegram",
			images: "/images/social/tele-circle.svg",
			link: "https://t.me/metabasegg"
		},
		{
			title: "discord",
			images: "/images/social/discord-circle.svg",
			link: "https://discord.com/invite/Fy5gQQth4R"
		},
		{
			title: "telegram",
			images: "/images/social/twitter-circle.svg",
			link: "https://twitter.com/Metabase_gg"
		}
	]

	return (
		<div className='ambitious pt-[90px] pb-[180px]'>
			<div className='container mx-auto pb-16'>
				<div className='flex-none md:flex justify-between items-center'>
					<Fade top>
						<h2 className='text-xl md:text-2xl lg:text-4xl text-center md:text-left font-bold'>
							{t('get_involved1')} {t('get_involved2')}
						</h2>
					</Fade>
					<div className='text-center md:text-left mt-6 md:mt-0 flex gap-4 2xl:gap-9 justify-center'>
						{soscialItems.map((item, i) => (
							<Fade
								key={i}
								top
								delay={i !== 0 ? i * 200 : 0}
							>
								<a

									href={item.link}
									target='_blank'
									className='icon-social w-12 lg:w-[62px] h-12 lg:h-[62px]'
									rel='noreferrer'
								>
									<Image
										src={item.images}
										layout='responsive'
										width={62}
										height={62}
										alt={item.title}
									/>
								</a>
							</Fade>
						))}
					</div>
				</div>
			</div>

			<div
			className='container mx-auto'
				// className='md:px-[3.87rem] mx-auto'
			>
				<Slider {...settings}>
					<div className='px-2 md:px-4'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/1.png'
							alt='games'
						/>
					</div>
					<div className='px-2 md:px-4 h-full flex flex-col justify-between'>
						<div>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/2.png'
								alt='games'
							/>
						</div>

						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/3.png'
								alt='games'
							/>
						</div>
					</div>

					{/* test  */}

					<div className='px-2 md:px-4'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/4.png'
							alt='games'
						/>
					</div>
					{/* end test  */}

					<div className='px-2 md:px-4 h-full flex flex-col justify-between'>
						<div>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/5.png'
								alt='games'
							/>
						</div>

						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/6.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-2 md:px-4'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/7.png'
							alt='games'
						/>
					</div>
					<div className='px-2 md:px-4 h-full flex flex-col justify-between'>
						<div>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/8.png'
								alt='games'
							/>
						</div>

						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/9.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-2 md:px-4'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/10.png'
							alt='games'
						/>
					</div>
					<div className='px-2 md:px-4 h-full flex flex-col justify-between'>
						<div>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/11.png'
								alt='games'
							/>
						</div>

						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/12.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-2 md:px-4'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/13.png'
							alt='games'
						/>
					</div>

					{/* <div className='px-2 md:px-[25px]'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/4.png'
							alt='games'
						/>
					</div>
					<div className='px-2 md:px-[25px]'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/5.png'
							alt='games'
						/>
						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/6.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-2 md:px-[25px]'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/7.png'
							alt='games'
						/>
					</div>
					<div className='px-1'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/8.png'
							alt='games'
						/>
						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/9.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-1'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/10.png'
							alt='games'
						/>
					</div>
					<div className='px-1'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/11.png'
							alt='games'
						/>
						<div className=''>
							<img
								width='100%'
								height='auto'
								layout='responsive'
								src='/images/12.png'
								alt='games'
							/>
						</div>
					</div>
					<div className='px-1'>
						<img
							width='100%'
							height='auto'
							layout='responsive'
							src='/images/13.png'
							alt='games'
						/>
					</div> */}
				</Slider>
			</div>
		</div>
	)
}
