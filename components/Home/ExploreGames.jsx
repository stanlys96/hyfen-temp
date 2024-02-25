import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Carousel from './sections/Carousel'

export default function ExploreGames() {
	const { t } = useTranslation('home')
	const [index, setIndex] = useState(0)
	const [timeoutId, setTimeoutId] = useState(0)
	const [windowWidth, setWindowWidth] = useState(0)

	const mod = (n, m) => {
		let result = n % m

		// Return a positive value
		return result >= 0 ? result : result + m
	}

	const cards = [
		{
			id: '1',
			image: '/images/carousel/axie-infinity.png',
			imagePhone: '/images/carousel/axie-phone.png',
		},
		{
			id: '2',
			image: '/images/carousel/gunstar.png',
			imagePhone: '/images/carousel/gunstar-phone.png',
		},
		{
			id: '3',
			image: '/images/carousel/thetan-arena.png',
			imagePhone: '/images/carousel/thetan-arena-phone.png',
		},
		{
			id: '4',
			image: '/images/carousel/castle-crush.png',
			imagePhone: '/images/carousel/castle-crush-phone.png',
		},
		{
			id: '5',
			image: '/images/carousel/draco-master.png',
			imagePhone: '/images/carousel/draco-master-phone.png',
		},
		{
			id: '6',
			image: '/images/carousel/galaxy-fight-club.png',
			imagePhone: '/images/carousel/galaxy-fight-club-phone.png',
		},
		{
			id: '7',
			image: '/images/carousel/mythic-protocol.png',
			imagePhone: '/images/carousel/mythic-protocol-phone.png',
		},
		{
			id: '8',
			image: '/images/carousel/sipher-odyssey.png',
			imagePhone: '/images/carousel/sipher-odyssey-phone.png',
		},
		{
			id: '9',
			image: '/images/carousel/league-of-kingdoms.png',
			imagePhone: '/images/carousel/league-of-kingdoms-phone.png',
		},
		{
			id: '10',
			image: '/images/carousel/aavegotchi.png',
			imagePhone: '/images/carousel/aavegotchi-phone.png',
		},
		{
			id: '11',
			image: '/images/carousel/pegaxy.png',
			imagePhone: '/images/carousel/pegaxy-phone.png',
		},
		{
			id: '12',
			image: '/images/carousel/stepn.png',
			imagePhone: '/images/carousel/stepn-phone.png',
		},
		{
			id: '13',
			image: '/images/carousel/walken.png',
			imagePhone: '/images/carousel/walken-phone.png',
		},
		{
			id: '14',
			image: '/images/carousel/geng.png',
			imagePhone: '/images/carousel/geng-phone.png',
		},
	]

	let resizeWindow = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		resizeWindow()
		window.addEventListener('resize', resizeWindow)
		return () => window.removeEventListener('resize', resizeWindow)
	}, [])

	useEffect(() => {
		setTimeoutId(
			setTimeout(() => {
				setIndex((index + 1) % cards?.length)
			}, 3000)
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index])

	return (
		<div className='relative mx-auto container max-w-7xl gamefi pt-[93px] md:pb-20 overflow-hidden'>
			<Fade top>
				<div className='container mx-auto'>
					<h2 className='text-[28px] font-[700] leading-[36px] md:text-[48px] md:leading-[62px] text-center mb-5'>
						{t('home:Explore New Games')}
					</h2>
					<h2 className='text-[16px] md:text-[20px] font-[200] text-center tracking-wide leading-[26px]'>
						{t('home:Immerse Yourself')}
					</h2>
				</div>
			</Fade>

			<Fade top>
				<div className='custom-carousel mt-[130px] md:mt-52 mb-36 container mx-auto max-w-7xl'>
					{cards?.map((item, i) => {
						const indexLeft = mod(index - 1, cards?.length)
						const indexRight = mod(index + 1, cards?.length)

						let className = 'carousel-card'

						if (i === index) {
							className = 'carousel-card carousel-card-active'
						} else if (i === indexRight) {
							className = 'carousel-card carousel-card-right'
						} else if (i === indexLeft) {
							className = 'carousel-card carousel-card-left'
						} else className = 'carousel-card'

						className += windowWidth > 768 ? ' w-[45%]' : ' w-[90%]'

						return (
							<Carousel
								className={className}
								key={item.id}
								item={item}
								index={index}
								setIndex={setIndex}
								timeoutId={timeoutId}
								i={i}
							/>
						)
					})}
				</div>
			</Fade>
		</div>
	)
}
