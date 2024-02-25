import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

export default function OurProducts() {
	const { t } = useTranslation('home')

	const items = [
		{
			title: t('home:hyfen_play'),
			description1: t('home:hyfen_play_desc'),
			link: '/hyfen-play',
		},
		{
			title: t('home:hyfen_tools'),
			description1: t('home:hyfen_tools_desc1'),
			description2: t('home:hyfen_tools_desc2'),
			link: '/hyfen-tools',
		},
	]

	return (
		<div className='gamefi relative mt-24 mx-auto container max-w-7xl px-0'>
			<Fade top>
				<div className='text-center mb-5'>
					<h2 className='text-[28px] leading-[36px] md:text-5xl md:leading-[62px] easiest-way-title easiest-way-gradient inline-block mx-auto text-center mb-5'>
						{t('home:Our Products')}
					</h2>
				</div>
			</Fade>
			<div className='relative '>
				{items.map((item, i) => (
					<Fade key={i} top delay={i !== 0 ? i * 200 : 0}>
						<Link legacyBehavior passHref href={item.link}>
							{/* Container Products */}
							<div className='group relative w-full h-full cursor-pointer'>
								{/* Section Background */}
								<div
									className={[
										'relative z-10 flex justify-between items-center px-4 py-8 md:p-14 w-2/3 group-hover:w-5/6 transition-all duration-300 gap-6',
										`bg-product-${i + 1}`,
										i === 0 ? 'lg:rounded-tl-3xl' : 'lg:rounded-bl-3xl',
									].join(' ')}
								>
									{/* Container Heading and Description */}
									<div className='relative '>
										<div className='relative flex flex-col gap-4 md:gap-6 w-fit'>
											<h1 className='text-[20px] md:text-[36px] leading-[26px] font-[700] md:leading-[32px] pr-14 md:pr-0 w-fit transition-all duration-300'>
												{item.title}
											</h1>
											<p className='text-[16px] md:text-[20px] text-white/80 font-[400] w-[180px] md:w-[450px] tracking-wide transition-all duration-300'>
												{item.description1}
											</p>
										</div>
									</div>
									{/* Arrow Icons */}
									<div className='relative h-14 w-14 md:w-24 flex justify-center items-center md:h-16'>
										<Image
											priority
											src={`/images/home/arrow-right.svg`}
											alt={item.title}
											layout='fill'
										/>
									</div>
								</div>

								{/* Section Image */}
								<div
									className={[
										'absolute flex h-full right-0 top-0 z-0',
										`w-[1440px]`,
									].join(' ')}
								>
									<Image
										priority
										src={`/images/home/product-${i + 1}.png`}
										className={[
											'object-contain  transition-all duration-300 object-right translate-x-44 md:translate-x-0  md:w-full',
											i === 0 ? 'lg:rounded-tr-3xl' : 'lg:rounded-br-3xl',
										].join(' ')}
										layout='fill'
										alt={item.title}
									/>
								</div>
							</div>
						</Link>
					</Fade>
				))}
			</div>
		</div>
	)
}
