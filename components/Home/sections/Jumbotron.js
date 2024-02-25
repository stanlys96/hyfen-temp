import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-reveal'
import ScrollDown from '../../..//components/Common/ScrollDown'

export default function Jumbotron() {
	const { t } = useTranslation()

	return (
		<div className='relative container mx-auto max-w-7xl pt-28 md:-mt-24'>
			{/* Container Content */}
			<div className='relative grid place-items-center grid-cols-1 gap-4 lg:grid-cols-2'>
				{/* Heading, Description, and Button Download */}
				<div className='relative grid place-items-center justify-items-center md:place-items-start lg:-mt-4'>
					{/* Heading */}
					<Fade top>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center  lg:text-left font-bold'>
							{t('home:Play Games')},
						</h1>
						<h4 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center lg:text-left font-bold'>
							{t('home:Earn Money')}.
						</h4>
					</Fade>
					{/* Desription */}
					<Fade top>
						<p className='mt-4 text-center font-[400] lg:text-left text-[16px] md:text-[20px] md:pr-24 leading-8 tracking-wide'>
							{t('home:step_into_the_world')} {t('home:step_into_the_world2')}{' '}
							{t('home:step_into_the_world3')}
						</p>
					</Fade>
					{/* Button Download */}
					<Fade top delay={200}>
						<div className='relative flex justify-between items-center gap-4 mt-7'>
							{/* Ios */}
							<div className='relative -mb-[0.45rem] -mt-0.5'>
								<Image
									src='/images/App Store.svg'
									height={60}
									width={200}
									quality={100}
									alt='apple-store'
								/>
								<div className='absolute top-0 transition-all duration-300 text-white transform overflow-hidden text-right w-24 md:w-full h-[90%] right-0'>
									<span
										className='bg-app-purple text-right transition-all duration-300 pr-5 md:pr-8 right-1 md:-right-5  w-[7rem] 
											sm:w-[7.4rem] md:w-32 md:top-0 md:absolute'
										style={{
											fontSize: '13px',
											WebkitTransform: 'rotate(45deg)',
											transform: 'rotate(45deg)',
											// width: '135px',
											display: 'block',
										}}
									>
										Soon
									</span>
								</div>
							</div>
							{/* Android */}
							<Link
								legacyBehavior
								passHref
								href='https://play.google.com/store/apps/details?id=com.metabase.gg'
							>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='relative -mb-[0.45rem]'
								>
									<Image
										src='/images/Google Play.svg'
										height={60}
										width={200}
										alt='android'
									/>
								</a>
							</Link>
						</div>
					</Fade>

					{/* Kominfo Icon  */}
					<div className='relative mt-8'>
						<Fade top delay={200}>
							<h4 className='font-semibold tracking-wide text-base'>
								{t('home:register_license')}
							</h4>
							<div className='relative mt-4 flex md:justify-start justify-center items-center'>
								<Image
									height={53}
									width={53}
									src={'/images/kominfo.svg'}
									alt='kominfo'
									loading='lazy'
								/>
							</div>
						</Fade>
					</div>

					{/*Animation Scroll when dekstop*/}
					<div className='relative block mt-10'>
						<ScrollDown className='relative' />
					</div>
				</div>

				{/* Image Content */}
				<Fade right delay={100}>
					{/* Image */}
					<div className='relative -mt-4 lg:max-h-fit md:mt-4 h-[450px] md:h-[750px] w-full'>
						<Image
							priority
							src='/images/home/home-bg-img.png'
							alt='image-home'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</Fade>
			</div>
		</div>
	)
}
