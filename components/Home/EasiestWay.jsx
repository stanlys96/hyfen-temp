import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Tilt from 'react-tilt'

export default function EasiestWay() {
	const { t } = useTranslation('home')
	const items = [
		{
			title: t('Explore'),
			description: t('Explore_desc'),
			image_url: 'Explore.png',
			className: 'explore-text',
		},
		{
			title: t('EarnMoney'),
			description: t('EarnMoney_desc'),
			image_url: 'EarnMoney.png',
			className: 'earnmoney-text',
		},
		{
			title: t('Redeem'),
			description: t('Redeem_desc'),
			image_url: 'Redeem.png',
			className: 'redeem-text',
		},
	]

	return (
		<div className='relative w-full h-full bg-app-bg_app mx-auto container max-w-7xl pb-24 mt-[100px] md:mt-14'>
			<Fade top>
				<div className='relative w-full'>
					<h1 className='text-[32px] leading-[41px] md:text-[64px] font-[700] md:leading-[83px] easiest-way-gradient text-center md:text-left'>
						{t('home:easiest_way')}
					</h1>
					<h1 className='text-[32px] leading-[41px] md:text-[64px] md:leading-[83px] text-white text-center md:text-left'>
						{t('home:play_crypto')}
					</h1>
				</div>
			</Fade>

			<div className='relative mt-8 md:mt-20 grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-x-10'>
				{items.map((item, i) => (
					<Tilt key={i}>
						<Fade top delay={i !== 0 ? i * 200 : 0}>
							<div className='relative py-10'>
								<div className='relative h-24 w-full flex justify-center items-center md:justify-start'>
									<Image
										src={`/images/${item.image_url}`}
										height={100}
										width={100}
										quality={100}
										alt={item.image_url}
									/>
								</div>
								<div className='flex flex-col md:gap-[16px]  md:pl-0 md:pr-14 mt-4 md:mt-6'>
									<h1
										className={`${item.className} text-center md:text-left leading-[31.25px] font-bold text-[20px] md:text-[24px] tracking-wider px-8 md:pl-0 md:pr-14`}
									>
										{item.title}
									</h1>
									<p className='text-[14px] mt-2 md:mt-0 font-light md:text-[16px] tracking-wider leading-6'>
										{item.description}
									</p>
								</div>
							</div>
						</Fade>
					</Tilt>
				))}
			</div>
		</div>
	)
}
