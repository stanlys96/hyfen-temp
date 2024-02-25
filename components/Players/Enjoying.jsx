import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

function Enjoying() {
	function SampleNextArrow(props) {
		const { className, onClick } = props
		return (
			<div
				className={className}
				style={{ display: 'block', width: 42, height: 42 }}
				onClick={onClick}
			>
				<Image
					src='/images/Group_1064.svg'
					alt='appstore'
					layout='responsive'
					width={42}
					height={42}
				/>
			</div>
		)
	}

	function SamplePrevArrow(props) {
		const { className, onClick } = props
		return (
			<div
				className={className}
				style={{ display: 'block', width: 42, height: 42 }}
				onClick={onClick}
			>
				<Image
					src='/images/Group_1063.svg'
					alt='appstore'
					layout='responsive'
					width={42}
					height={42}
				/>
			</div>
		)
	}

	const { t } = useTranslation('players')

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		className: 'slider-enjoying',
		slidesToShow: 2,
		slidesToScroll: 1,
		customPaging: function (i) {
			return <a>{i + 1}</a>
		},
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className='container mx-auto mb-[40] enjoying-wrap pb-[180px]'>
			<Fade left>
				<p className='text-xl sm:text-3xl md:text-40 text-center md:text-left font-bold'>{t('See How Other Players are')} {t('Enjoying')} {t('Blockchain Games')}</p>
			</Fade>
			<div className='mt-[20px] md:mt-[50px]'>
				<Fade bottom>
					<Slider {...settings}>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/Group_1058.svg'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“I got into Axie in the midst of the impact of Corona, so I
								dropped out of college and I earn money by playing games and able
								to support my study.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a className='color-blue'>Ado Davin </a>
								</span>
							</div>
						</div>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/player2.2.png'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“I started getting to know Axie from a friend. I didn&lsquo;t
								expect it by playing games, we are able to earn money that is
								equal to my full time job.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a>Albert Ferento </a>
								</span>
							</div>
						</div>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/blog2.png'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“
								{t(
									'At first, I was invited by a friend to be a scholar. I have no capital to start, now I finally have my own axie and manage my own guild'
								)}
								.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a className='color-blue'>James Indra</a>
								</span>
							</div>
						</div>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/blog3.png'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“
								{t(
									'I was looking for extra income through blockchain game and experienced Axie. It could help pay my tuition give gifts to my loved ones'
								)}
								.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a className='color-blue'>Goklas Miracle </a>
								</span>
							</div>
						</div>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/blog4.png'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“
								{t(
									`For employee workers just like me, I really feel it helps to get additional income. I'm trying and learning more in other games & Metabase`
								)}
								.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a className='color-blue'>Wahyu </a>
								</span>
							</div>
						</div>
						<div className='p-3 text-base md:text-lg'>
							<Image
								src='/images/blog5.png'
								alt='appstore'
								layout='responsive'
								width={460}
								height={256}
								className='rounded-[30px]'
							/>
							<p className='mt-7'>
								“
								{t(
									'I got into Axie in the midst of the impact of Corona, so I dropped out of college and I earn money by playing games and able to support my study'
								)}
								.“
							</p>
							<div className='flex text-blue text-sm md:text-base mt-3'>
								<p className='mr-3'>-</p>
								<span>
									<a className='color-blue'>Kevin Sidharta </a>
								</span>
							</div>
						</div>
					</Slider>
				</Fade>
			</div>
		</div>
	)
}

export default Enjoying
