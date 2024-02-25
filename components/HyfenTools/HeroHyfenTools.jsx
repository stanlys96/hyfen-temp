import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import ScrollDown from '../Common/ScrollDown'
import { Heading1 } from '../modules/atoms'

function HeroHyfenTools() {
	const { t } = useTranslation('hyfen-tools')
	return (
		<div className='relative container mx-auto max-w-7xl pt-24 md:pt-10 pl-5'>
			<div className='relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 place-items-center'>
				{/* Description */}
				<div className='relative m-0 p-0 mt-10'>
					<div className='relative p-0'>
						<Fade top>
							<Heading1 text={'Hyfen Tools'} addClass='hyfen-play-gradient' />
							<h2 className='mt-3 text-[22px] lg:text-[36px] leading-[28px] lg:leading-[46px] lg:w-[85%] tracking-wide text-center lg:text-left font-bold'>
								{t('Manage Guild')}
							</h2>
						</Fade>
					</div>

					<Fade top delay={200}>
						<div className='flex justify-center lg:block'>
							<div className='w-fit header__download-button text-slate-900 bg-white py-3 px-6  text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center'>
								<span className='inline-block mr-2'>
									{t('Onboard Your Guild')}{' '}
								</span>
								<Image
									src={`/images/arrow_right.svg`}
									className='ml-5'
									width={20}
									height={20}
									alt='BaseLogo'
									layout='intrinsic'
									quality={100}
								/>
							</div>
						</div>
						<ScrollDown className='justify-center lg:justify-start hidden md:flex mt-10' />
					</Fade>
				</div>
				{/* Image */}
				<Fade right delay={200}>
					<div className='relative lg:mt-24 lg:px-0 h-[300px] md:h-[450px] w-[1440px] max-w-full px-8'>
						<div className='relative h-full w-full'>
							<Image
								src='/images/hyfen-tools/hyfen-tools-img.svg'
								alt='image'
								layout='fill'
							/>
						</div>
					</div>
					<ScrollDown className='justify-center lg:justify-start flex md:hidden mt-[36px]' />
				</Fade>
			</div>
		</div>
	)
}

export default HeroHyfenTools
