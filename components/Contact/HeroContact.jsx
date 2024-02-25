import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fade } from 'react-reveal'

function HeroContact() {
	const { t } = useTranslation('contact')
	return (
		<div className='relative w-full max-w-full h-[50vh] inset-0'>
			<div className='absolute z-0 w-full h-full'>
				<div className='absolute w-full h-full bg-app-bg_app'></div>
				<Image
					src={'/images/contact/get-in-touch-bg.png'}
					width={1920}
					height={1080}
					alt='image'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='absolute top-[50%] -translate-y-14 w-full z-10'>
				<Fade top>
					<p className='text-3xl xl:text-6xl font-bold text-center mb-4'>
						{t('Get In Touch')}
					</p>
				</Fade>
				<Fade top delay={200}>
					<p className='text-base xl:text-xl text-center mb-4'>
						{t('Get In Touch_desc')}
					</p>
				</Fade>
			</div>
		</div>
	)
}

export default HeroContact
