import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import SliderFeatureTabItem from './SliderFeatureTabItem'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SilderFeature = ({
	items,
	title,
	button,
	translation = '',
	titleGradient = false,
}) => {
	const { t } = useTranslation(translation)
	const sliderElement = useRef()
	const [activeSlide, setActiveSlide] = useState(0)
	const [lineInit, setLineInit] = useState(false)
	const router = useRouter()

	const settings = {
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		vertical: true,
		verticalSwiping: true,
		pauseOnHover: false,
		className: 'slider-enjoying',
		customPaging: function (i) {
			return <a>{i + 1}</a>
		},
		beforeChange: function (currentSlide, nextSlide) {
			setActiveSlide(nextSlide)
			setLineInit(false)
		},
		afterChange: function () {
			setLineInit(true)
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					vertical: false,
				},
			},
		],
	}

	return (
		<div
			className={[
				'relative md:mx-auto md:container md:max-w-7xl',
				router.pathname === '/hyfen-tools' && 'md:px-0',
			].join(' ')}
		>
			{/* Heading Section */}
			<div className='relative px-16 md:w-1/2 md:pl-0 md:pr-28'>
				<Fade bottom>
					<h1
						className={`text-[28px] md:text-[48px] leading-[36px] text-center  md:text-left font-bold md:leading-[62px] ${
							titleGradient && 'slider-title-gradient'
						}`}
					>
						{t(title)}
					</h1>
				</Fade>
				{button && (
					<Fade bottom>
						<Link
							legacyBehavior
							passHref
							href={button.link}
							className='mt-7 btn bg-blue hover:bg-hover px-8 py-4 text-xs md:text-base text-black-100 inline-block'
						>
							{button.title}
						</Link>
					</Fade>
				)}
			</div>
			{/* Content Section */}
			<div className='relative grid grid-cols-1 md:grid-cols-2 mt-8 pb-12 w-full'>
				{/* Description */}
				<div className='hidden md:block relative pl-[45px] h-fit'>
					<Fade delay={500}>
						<div className='absolute top-0 bottom-0 left-0 w-[3px] h-full bg-white-30 rounded'>
							<span
								className={`w-full rounded block bg-white ${
									lineInit ? 'line-animation' : ''
								}`}
							/>
						</div>
					</Fade>
					<Fade left>
						<div>
							{items.map((item, i) => (
								<SliderFeatureTabItem
									key={i}
									index={i}
									active={activeSlide === i}
									title={t(item.code)}
									onChange={() => {
										sliderElement?.current?.slickGoTo(i)
									}}
									description={`${t(item?.code + '-desc')}`}
									translation={translation}
								/>
							))}
						</div>
					</Fade>
				</div>
				{/* Image */}
				<div
					className={[
						'relative md:-mt-32 max-h-full transition-all duration-300',
						router.pathname === '/hyfen-tools' ? '-mt-14 pb-0' : 'mt-5',
						router.pathname === '/hyfen-pay' ? '-mt-14 pb-0' : 'mt-5',
					].join(' ')}
				>
					<Fade right>
						<Slider ref={sliderElement} {...settings}>
							{items.map((item, i) => (
								<div className='relative' key={item?.code}>
									<div
										className={[
											'transition-all duration-500',
											// router.pathname !== '/hyfen-pay' &&
											// 	'h-[400px] max-h-full md:mt-10 md:h-[550px] ',

											router.pathname === '/hyfen-pay' &&
												'pt-2 mt-4 mb-8 lg:mt-0 lg:mb-0',
											i === activeSlide ? 'translate-y-0' : 'translate-y-20',
										].join(' ')}
									>
										<Image
											src={item?.images}
											alt={item?.code}
											width={
												router.pathname === '/hyfen-play'
													? 600
													: router.pathname === '/hyfen-tools'
													? 700
													: router.pathname === '/hyfen-pay'
													? 600
													: 600
											}
											height={
												router.pathname === '/hyfen-play'
													? 600
													: router.pathname === '/hyfen-tools'
													? 550
													: 650
											}
											quality={100}
											objectFit='cover'
											priority
										/>
									</div>
									<div
										className={[
											'text-center relative px-[28px]',
											router.pathname === '/hyfen-play' && 'mt-12',
											router.pathname === '/hyfen-tools' && '-mt-6',
											router.pathname === '/hyfen-pay' && '-mt-6',
										].join(' ')}
									>
										<h5 className='text-[24px] text-white font-bold mb-2 md:hidden'>
											{t(item.code)}
										</h5>
										<p className='text-[14px] md:text-[20px] text-white/50 md:hidden'>
											{t(item.code + '-desc')}
										</p>
									</div>
								</div>
							))}
						</Slider>
					</Fade>
				</div>

				{/* End Section Image */}
			</div>
		</div>
	)
}

export default SilderFeature
