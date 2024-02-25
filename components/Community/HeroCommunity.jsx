import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-reveal'
import { communitySosmed } from '../../mock/community'

function HeroCommunity() {
	const { t } = useTranslation('community')
	return (
		<div className='relative h-[50vh] max-h-full'>
			{/* Image Background */}
			<div className='relative grid md:grid-cols-2 pt-0 z-0'>
				<div className='relative h-[25vh] md:h-[50vh]  w-full transition-all duration-300'>
					<Image
						src={'/images/community-1.png'}
						alt='image'
						layout='fill'
						objectFit='cover'
						objectPosition={'top'}
						quality={50}
					/>
				</div>
				<div className='relative h-[25vh] md:h-[50vh] w-full transition-all duration-300'>
					<Image
						priority
						src={'/images/community-2.png'}
						alt='image'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>

			{/* Description and Icon Sosmed Section */}
			<div className='absolute z-10 top-32 xl:top-[50%] xl:-translate-y-14 w-full'>
				<div className='relative mx-auto max-w-6xl container flex flex-col justify-center items-center gap-4'>
					{/* <Fade top> */}
					<h1 className='text-[30px] md:text-[48px] text-center leading-relaxed'>
						{t('Home Gamers')}
					</h1>
					{/* </Fade> */}

					{/* Section Social Media */}
					<div className='relative grid grid-cols-3 lg:grid-cols-6 place-items-center justify-items-center gap-6 xl:gap-8 max-w-4xl'>
						{communitySosmed?.map((item, i) => (
							<Fade key={i} right delay={i == 0 ? 100 : i * 200}>
								<div className='relative border h-14 w-14 xl:h-16 xl:w-16 flex justify-center items-center rounded-full'>
									<Link
										legacyBehavior
										passHref
										href='#'
										className='flex justify-center items-center relative'
									>
										<Image
											src={`/images/social/${item.imageUrl}`}
											className='py-2'
											width={30}
											height={30}
											alt='BaseLogo'
											layout='intrinsic'
											quality={100}
										/>
									</Link>
								</div>
							</Fade>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroCommunity
