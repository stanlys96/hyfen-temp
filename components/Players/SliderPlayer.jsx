import Image from 'next/image'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
// import CountUp from 'react-countup'
// import VisibilitySensor from 'react-visibility-sensor'

export default function SliderPlayer() {
	const { t } = useTranslation('players')
	// const [countLoaded, setCountLoaded] = useState(false)
	const [tabActive, setTabActive] = useState(1)
	const slider = useRef()
	const players = [
		{
			image: '/images/players/player1.png',
			alt: 'player',
			width: 450,
			height: 556,
		},
		{
			image: '/images/players/player2.png',
			alt: 'player',
			width: 450,
			height: 556,
		},
		{
			image: '/images/players/player3.png',
			alt: 'player',
			width: 450,
			height: 556,
		},
		{
			image: '/images/players/player4.png',
			alt: 'player',
			width: 450,
			height: 556,
		},
	]
	const settings = {
		fade: true,
		dots: false,
		speed: 500,
		slidesToShow: 1,
		infinite: false,
		arrows: false,
		beforeChange: (current, next) => setTabActive(next + 1),
		afterChange: (current) => setTabActive(current + 1),
		responsive: [
			{
				breakpoint: 480,
				settings: {
					dots: true,
				},
			},
		],
	}

	useEffect(() => {
		slider.current.slickGoTo(tabActive - 1)
	}, [tabActive])

	return (
		<>
			<div className='mt-12'>
				<p className='text-center'>{t('Community_count')}:</p>
				<div className='text-center text-3xl md:text-5xl mt-4'>
					{/* <CountUp end={3500} redraw={true}>
						{({ countUpRef, start }) => (
							<VisibilitySensor
								onChange={(e) => {
									if (e && !countLoaded) {
										start(true)
										setCountLoaded(true)
									}
								}}
							>
								<span ref={countUpRef} />
							</VisibilitySensor>
						)}
					</CountUp> */}
					+ Players
				</div>
			</div>
			<div className='container 2xl:px-10 pt-12 mx-auto mt-12 pb-12 md:pb-0 slide-player'>
				<div className='text-center md:text-left'>
					<h5 className='mb-12 text-center md:text-left text-xl sm:text-3xl md:text-40 font-bold max-w-md'>
						{t('Your Gaming Needs in One App')}
					</h5>
					<a
						href='https://metabase-gg.typeform.com/early-access'
						target={'_blank'}
						rel='noreferrer'
					>
						<button className='px-10 py-3 bg-blue rounded-[100px] font-bold text-xs md:text-base text-black-100 hover:bg-[#1DFAFF]'>
							Register for Early Access
						</button>
					</a>
				</div>
				<div className='flex md:flex-row flex-col mt-12'>
					<div className='order-2 md:order-1 md:w-6/12 text-center md:text-left'>
						<div className='mt-6'>
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
									{t('Multiple Blockchain Games')}
								</h5>
								{tabActive === 1 && (
									<p className='mt-3 text-xs md:text-base opacity-80'>
										{t(
											'Explore and play different blockchain games ranging from MMORPG, MOBA, Arcade, Strategy to FPS'
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
									{t('Rent In-game Assets (NFT)')}
								</h5>
								{tabActive === 2 && (
									<p className='mt-3 text-xs md:text-base opacity-80'>
										{t(
											'Choose your favorite in-game assets (NFT) to play at your best performance'
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
									{t('Peformance Tracking')}
								</h5>
								{tabActive === 3 && (
									<p className='mt-3 text-xs md:text-base opacity-80'>
										{t(
											'Keep track of your performance daily to improve your skills'
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
									{t('Off-ramp Partners')}
								</h5>
								{tabActive === 4 && (
									<p className='mt-3 text-xs md:text-base opacity-80'>
										{t(
											'Choose to get rewarded directly to your e-wallet or cryptocurrency wallet'
										)}
										.
									</p>
								)}
							</div>
						</div>
					</div>
					<div className='md:w-6/12 px-0 md:px-8 order-1 md:order-2 text-center md:mt-[-200px]'>
						<Slider {...settings} ref={slider}>
							{players.map((item, index) => (
								<div key={index} className='flex justify-center items-center'>
									<Image
										src={item.image}
										alt={item.alt}
										width={item.width}
										height={item.height}
										layout='intrinsic'
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	)
}
