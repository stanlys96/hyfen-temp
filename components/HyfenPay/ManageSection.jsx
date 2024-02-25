import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'

export default function ManageSection() {
	const { t } = useTranslation('hyfen-pay')

	return (
		<div className='relative max-w-7xl mx-auto'>
			{/* Heading */}
			<div className='relative'>
				<h1 className='text-xl lg:text-2xl font-semibold text-white leading-relaxed tracking-wide transition-all duration-300'>
					{t('Manage')}
				</h1>
				<p className='text-sm lg:text-base font-light text-white/50 pr-12 lg:w-2/3 lg:pr-24 mt-3 tracking-wide leading-relaxed'>
					{t('Manage-desc')}
				</p>
			</div>

			<div className='relative w-full h-full '>
				<div className='relative mt-12'>
					<Image
						src={'/images/hyfen-pay/manage.png'}
						width={1920}
						height={1080}
						priority
						loading='eager'
						alt='image-manage'
					/>
				</div>
			</div>
		</div>
	)
}
