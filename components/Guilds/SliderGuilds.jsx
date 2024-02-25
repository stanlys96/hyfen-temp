import Image from 'next/image'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'

export default function SliderGuilds() {
	const { t } = useTranslation('guilds')
	const [tabActive, setTabActive] = useState(1)
	const slider = useRef()
	const settings = {
		fade: true,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		infinite: false,
		arrows: false,
		beforeChange: (current, next) => setTabActive(next + 1),
		afterChange: (current) => setTabActive(current + 1),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
				},
			},
		],
	}

	useEffect(() => {
		slider.current.slickGoTo(tabActive - 1)
	}, [tabActive])

	return (
		<div className='container 2xl:px-10 pt-12 mx-auto mt-12 pb-12 slide-player'>
			<div className='text-center md:text-left'>
				<h5 className='mb-12 text-center md:text-left text-xl md:text-2xl font-bold max-w-md px-[80px] md:px-0'>
					{t('Designed by Guilds, for Guilds')}
				</h5>
				<a href=''>
					<a
						href='https://metabase-gg.typeform.com/early-access'
						className='btn bg-blue hover:bg-hover px-8 py-4 text-xs md:text-base text-black-100 inline-block'
					>
						{t('common:Register for Early Access')}
					</a>
				</a>
			</div>
			<div className='flex md:flex-row flex-col'>
				<div className='order-2 md:order-1 md:w-6/12 text-center md:text-left border-b-dark sm:border-0 pb-6 mx-6'>
					<div className='mt-12'>
						<div
							className={`pl-2 md:pl-8 left-border-white pt-8 md:pt-0 ${
								tabActive === 1 ? 'nav-active block' : 'hidden md:block'
							}`}
						>
							<h5
								className={`text-lg md:text-xl cursor-pointer font-bold  ${
									tabActive === 1 ? 'text-blue' : 'text-opacity-0.6'
								}`}
								onClick={() => setTabActive(1)}
							>
								{t('Unified Games Dashboard')}
							</h5>
							{tabActive === 1 && (
								<p className='mt-3 text-xs md:text-base opacity-80'>
									{t(
										'Manage your assets and earnings across different blockchain games'
									)}
									.
								</p>
							)}
						</div>
						<div
							className={`pl-2 md:pl-8 left-border-white pt-8 ${
								tabActive === 2 ? 'nav-active d-block' : 'hidden md:block'
							}`}
						>
							<h5
								className={`text-lg md:text-xl cursor-pointer font-bold ${
									tabActive === 2 ? 'text-blue' : 'text-opacity-0.6'
								}`}
								onClick={() => setTabActive(2)}
							>
								{t('Performance Monitoring')}
							</h5>
							{tabActive === 2 && (
								<p className='mt-3 text-xs md:text-base opacity-80'>
									{t(
										'Automatically monitor and set daily minimum earnings for players to maximize your profitability'
									)}
									.
								</p>
							)}
						</div>

						<div
							className={`pl-2 md:pl-8 left-border-white pt-8 ${
								tabActive === 3 ? 'nav-active d-block' : 'hidden md:block'
							}`}
						>
							<h5
								className={`text-lg md:text-xl cursor-pointer font-bold ${
									tabActive === 3 ? 'text-blue' : 'text-opacity-0.6'
								}`}
								onClick={() => setTabActive(3)}
							>
								{t('Automate Payouts')}
							</h5>
							{tabActive === 3 && (
								<p className='mt-3 text-xs md:text-base opacity-80'>
									{t(
										'Avoid wasting your time by using our automated payout system within a few clicks'
									)}
									.
								</p>
							)}
						</div>

						<div
							className={`pl-2 md:pl-8 left-border-white pt-8 ${
								tabActive === 4 ? 'nav-active d-block' : 'hidden md:block'
							}`}
						>
							<h5
								className={`text-lg md:text-xl cursor-pointer font-bold ${
									tabActive === 4 ? 'text-blue' : 'text-opacity-0.6'
								}`}
								onClick={() => setTabActive(4)}
							>
								{t('Assets Security')}
							</h5>
							{tabActive === 4 && (
								<p className='mt-3 text-xs md:text-base opacity-80'>
									{t(
										'Increase security by lending your assets without handing out your private keys'
									)}
									.
								</p>
							)}
						</div>
					</div>
				</div>
				<div className='md:w-6/12 px-0 md:px-8 order-1 md:order-2 text-center mt-12 md:mt-[-50px]'>
					<Slider {...settings} ref={slider}>
						<div className='flex justify-center items-center'>
							<Image
								src='/images/guilds-2.png'
								alt='slider-1'
								width={671}
								height={458}
								layout='responsive'
								quality={100}
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src='/images/guilds-3.png'
								alt='slider-1'
								width={671}
								height={458}
								layout='responsive'
								quality={100}
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src='/images/guilds-4.png'
								alt='slider-1'
								width={671}
								height={458}
								layout='responsive'
								quality={100}
							/>
						</div>
						<div className='flex justify-center items-center'>
							<Image
								src='/images/guilds-1.png'
								alt='slider-1'
								width={671}
								height={458}
								layout='responsive'
								quality={100}
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	)
}
