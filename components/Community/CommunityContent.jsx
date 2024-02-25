import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import { communityData } from '../../mock/community'

function CommunityContent() {
	const { t } = useTranslation('community')
	return (
		<div className='relative bg-app-bg_app h-full pt-4 xl:pt-12 pb-14'>
			{/* Container */}
			<div className='relative mx-auto container max-w-7xl '>
				{/* Section Content  */}
				<div className='relative grid gap-8'>
					{communityData?.map((item, i) => (
						<div
							key={item.id}
							className='relative gap-[24px] lg:gap-[56px] w-full justify-center items-center  flex flex-col md:even:flex-row-reverse md:odd:flex-row p-4'
						>
							{/* Section Image */}
							<Fade right={i % 2 !== 0} left={i % 2 === 0} delay={i * 150}>
								<div className='relative w-full h-[200px] lg:h-[300px] lg:w-[500px] flex-none'>
									<Image
										src={`/images/community/${item.code}.png`}
										alt={item?.code}
										layout='fill'
										objectFit='cover'
										className='rounded-2xl'
									/>
								</div>
							</Fade>

							{/* Section Description */}
							<Fade right={i % 2 === 0} left={i % 2 !== 0} delay={i * 250}>
								<div className='relative flex flex-col lg:flex-1 md:w-1/2'>
									<h1 className='text-white text-[20px] font-[400] md:text-[24px] leading-[26px] mb-[12px]'>
										{t(item.code)}
									</h1>
									<p className='text-[14px] md:text-[16px] text-white leading-[21px] w-full lg:w-[540px]'>
										{t(item.code + '-desc')}
									</p>
								</div>
							</Fade>
						</div>
					))}
				</div>

				{/* Section Interested */}
				<div className='relative mx-auto container max-w-7xl mt-[70px] bg-white/5 rounded-3xl px-0'>
					<div className='relative grid md:gap-[35px] place-items-center md:grid-cols-2 transition-all duration-300'>
						{/* Section Description */}
						<div className='relative p-8'>
							<h1 className='text-[20px] md:text-[24px] leading-[31px]'>
								{t('Interested In')}
							</h1>
							<p className='text-[14px] md:text-[16px] mt-[12px] leading-[20px]'>
								{t('Gain Experience')}
							</p>

							{/* Button Apply */}
							<button className='mt-[24px] header__download-button text-slate-900 bg-white py-3 px-6 text-xs md:text-sm font-[700] cursor-pointer flex items-center'>
								<span className='inline-block mr-2'>{t('Apply Here')} </span>
								<Image
									src={`/images/arrow_right.svg`}
									className='ml-5'
									width={20}
									height={20}
									alt='BaseLogo'
									layout='intrinsic'
									quality={50}
								/>
							</button>
						</div>
						{/* Section Image */}
						<Fade right delay={150}>
							<div className='relative h-64 w-full'>
								<Image
									src={'/images/community/Interested In.png'}
									alt='BaseLogo'
									layout='fill'
									className='rounded-b-2xl md:rounded-r-2xl'
									objectFit='cover'
								/>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CommunityContent
