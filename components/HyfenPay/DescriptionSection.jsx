import React from 'react'
import { ArrowRight } from '../../components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function DescriptionSection() {
	const { t } = useTranslation('hyfen-pay')
	return (
		<div className='relative mx-auto max-w-7xl'>
			{/* Heading */}
			<div className='relative text-center flex flex-col gap-4 justify-center items-center'>
				<h1
					className={
						'text-[28px] md:text-[48px] leading-[36px] text-center md:text-left font-bold md:leading-[62px] slider-title-gradient px-4'
					}
				>
					{t('Tailor')}
				</h1>
				<p className='max-w-xl leading-relaxed font-light text-sm text-white/50 tracking-wide'>
					{t('Tailor-desc')}
				</p>

				<Link
					legacyBehavior
					href={'https://documenter.getpostman.com/view/5252073/2s93CHtZwb'}
				>
					<a
						target={'_blank'}
						className='font-semibold flex items-center gap-3 text-white'
					>
						<p className='border-b pb-0.5 border-white'>{t('Read')}</p>
						<span>
							<ArrowRight className='h-4' />
						</span>
					</a>
				</Link>
			</div>

			{/* Image */}
			<div className='relative grid lg:grid-cols-5 place-items-start gap-y-6 gap-x-[49px] mt-[60px]'>
				<div className='relative flex gap-2 lg:justify-end lg:items-center lg:col-span-3 lg:w-full transition-all duration-300'>
					<div className='relative w-[153px] h-[201px] lg:w-[319px] lg:h-[420px] transition-all duration-300'>
						<Image
							src={'/images/hyfen-pay/tailor1.png'}
							alt='tailor1'
							layout='fill'
							objectFit='contain'
							priority
						/>
					</div>
					<div className='relative w-[153px] h-[201px] lg:w-[319px] lg:h-[420px] transition-all duration-300'>
						<Image
							src={'/images/hyfen-pay/tailor2.png'}
							alt='tailor2'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
				<div className='relative flex flex-col gap-6 mt-4 lg:mt-0 col-span-2 transition-all duration-300'>
					{Array.from({ length: 3 }).map((item, index) => (
						<div
							className='relative flex flex-col justify-center items-center lg:justify-start lg:items-start'
							key={index}
						>
							<h1 className='flex gap-2 text-lg font-semibold text-white leading-relaxed tracking-wide'>
								{index + 1}.<span>{t(`Tailor${index + 1}`)}</span>
							</h1>
							<p className='text-white/40 text-base tracking-wide leading-relaxed mt-1 text-center lg:text-left lg:w-2/3'>
								{t(`Tailor${index + 1}-desc`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
