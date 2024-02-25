import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export default function SupportSection() {
	const { t } = useTranslation('hyfen-pay')

	const dataSupport = [
		{
			title: t('Support1'),
			value: '10+',
		},
		{
			title: t('Support2'),
			value: '6',
		},
		{
			title: t('Support3'),
			value: '30+',
		},
	]

	return (
		<div className='relative mx-auto max-w-7xl'>
			{/* Heading */}
			<div className='relative'>
				<h1 className='text-xl lg:text-2xl font-semibold text-white leading-relaxed tracking-wide transition-all duration-300'>
					{t('Support')}
				</h1>
				<p className='text-sm lg:text-base font-light text-white/50 pr-12 lg:w-2/3 lg:pr-24 mt-3 tracking-wide leading-relaxed'>
					{t('Support-desc')}
				</p>
			</div>

			{/* Main */}
			<div className='relative grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-4 mt-8 lg:mt-12'>
				<div className='relative grid grid-cols-2 gap-4'>
					{dataSupport.map((item) => (
						<div key={item.title} className='relative'>
							<div className='relative '>
								<h1 className='text-2xl font-semibold text-white tracking-wide leading-relaxed'>
									{item.value}
								</h1>
							</div>
							<h1 className='text-base font-semibold text-white/50 tracking-wide leading-relaxed mt-2'>
								{item.title}
							</h1>
						</div>
					))}
				</div>
				<div className='relative'>
					<Image
						src={'/images/hyfen-pay/support.png'}
						alt='image-support'
						width={1920}
						height={1080}
						objectFit='contain'
					/>
				</div>
			</div>

			{/* Contact Us */}
			<div className='relative mt-12 lg:mt-28'>
				<div className='relative bg-[#1F2244] p-8 rounded-lg flex flex-col gap-y-8 lg:flex-row justify-between items-start lg:items-center'>
					<div>
						<h4 className='text-base lg:text-lg slider-title-gradient'>
							{t('Contact')}
						</h4>
						<h1 className='text-lg font-semibold text-white tracking-wide leading-relaxed'>
							{t('Contact-desc')}
						</h1>
					</div>

					<div>
						<button className='bg-white font-semibold text-black-100 px-6 py-2 rounded-full'>
							{t('Contact-btn')}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
