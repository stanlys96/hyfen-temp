import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fade } from 'react-reveal'

function HeroAbout() {
	const { t } = useTranslation('about')
	return (
		<div className='relative w-full max-w-full h-[50vh] max-h-full inset-0'>
			<div className='absolute z-0 w-full h-full'>
				<div className='absolute w-full h-full bg-app-bg_app'></div>
				<Image
					src={'/images/about/bg.png'}
					alt='image'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='absolute top-[50%] -translate-y-10 w-full z-10'>
				<Fade top>
					<p className='text-xl xl:text-4xl font-bold text-center leading-relaxed mb-4 mx-auto container max-w-xs xl:max-w-3xl'>
						{t('Onboarding')}
					</p>
				</Fade>
			</div>
		</div>
	)
}

export default HeroAbout
