import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import ScrollDown from '../Common/ScrollDown'
import { Heading1 } from '../modules/atoms'

export default function HeroSection() {
	const { t } = useTranslation('hyfen-pay')

	return (
		<div className='relative container mx-auto max-w-7xl pb-8 pt-24 md:pt-10 pl-5 transition-all duration-300'>
			<div className='relative overflow-hidden grid grid-cols-1 lg:gap-8 lg:grid-cols-2 place-items-center lg:place-items-start lg:items-center transition-all duration-300'>
				{/* Description */}
				<div className='relative m-0 p-0 mt-10'>
					<div className='relative p-0'>
						<Fade top>
							<Heading1 text={t('Title')} addClass='hyfen-play-gradient' />
							<h2 className='mt-3 text-[22px] lg:text-[36px] leading-[28px] lg:leading-[46px] tracking-wide text-center lg:text-left lg:mr-36 font-[800]'>
								{t('Desc')}
							</h2>
						</Fade>
					</div>

					<Fade top delay={200}>
						<div className='flex flex-col lg:flex-row gap-4 justify-center items-center lg:justify-start mt-8 transition-all duration-300'>
							<button className='relative w-fit bg-white text-black-100 rounded-full py-3 px-6 flex justify-center items-center gap-2 transition-all duration-300'>
								<span className='inline-block font-semibold'>
									{t('Button1')}
								</span>
								<Image
									src={`/images/arrow_right.svg`}
									width={20}
									height={20}
									alt='BaseLogo'
									layout='intrinsic'
									quality={100}
								/>
							</button>
							<button className='relative border w-44 font-bold border-white text-white rounded-full py-3 px-6 flex justify-center items-center gap-2 transition-all duration-300'>
								{t('Button2')}
							</button>
						</div>
						<ScrollDown className='justify-center lg:justify-start hidden md:flex mt-8' />
					</Fade>
				</div>
				{/* Image */}
				<Fade right delay={200}>
					<div className='relative mt-24'>
						<Image
							src='/images/hyfen-pay/pay.png'
							alt='image'
							width={1100}
							height={890}
							objectFit='cover'
						/>
					</div>
					<ScrollDown className='justify-center lg:justify-start flex md:hidden mt-5' />
				</Fade>
			</div>
		</div>
	)
}
