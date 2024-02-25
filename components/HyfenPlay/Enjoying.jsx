import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import { peopleTestimonials } from '../../mock/hyfen-play'

function Enjoying() {
	const { t } = useTranslation('hyfen-play')

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
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className='relative max-w-7xl container mx-auto mb-[20] enjoying-wrap pb-24 md:pb-[180px]'>
			<Fade left>
				<p className='text-[28px] px-6 md:px-0 md:text-[48px] text-center md:text-left font-bold'>
					{t('See How Other Players are')} {t('Enjoying')}{' '}
					{t('Blockchain Games')}
				</p>
			</Fade>
			<div className='relative mt-[20px] md:mt-[50px]'>
				<Fade bottom>
					<Slider {...settings}>
						{peopleTestimonials.map((item, i) => (
							<div key={i} className='relative text-base md:text-lg p-4'>
								<div className='relative'>
									<Image
										src={`/images/hyfen-play/${item.author}.png`}
										alt='appstore'
										layout='responsive'
										width={460}
										height={256}
										className='rounded-[30px]'
									/>
									<p className='mt-7 md:text-[20px] text-[16px]'>
										“{t(item.author)}“
									</p>
									<div className='flex text-white md:text-[16px] text-[14px] mt-3'>
										<p className='mr-3'>-</p>
										<span>
											<a className='text-white md:text-[16px] text-[14px]'>
												{item.author}{' '}
											</a>
										</span>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</Fade>
			</div>
		</div>
	)
}

export default Enjoying
