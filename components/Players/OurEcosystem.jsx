import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import { Fade } from 'react-reveal';

export default function OurEcosystem() {
	const { t } = useTranslation('players')

	const OurEcosystems = [
		{
			image: '/images/Frame_1144.svg',
			title: t('common:Fair'),
			description: t('fair_desc'),
		},
		{
			image: '/images/Frame_1145.svg',
			title: t('common:Fun'),
			description: t('fun_desc'),
		},
		{
			image: '/images/Frame_1146.svg',
			title: t('common:Simple'),
			description: t('simple_desc'),
		}
	]

	return (
		<div className='container mx-auto z-20'>
			<div className='md:mb-[120px] lg:px-[75px]'>
				<div className='flex flex-wrap justify-center gap-8 gap-x-4 md:gap-x-8'>
					{OurEcosystems.map((item, index) => (
						<div
							key={item}
							className="w-[45%] md:w-[30%]"
						>
							<Fade
								bottom
								delay={index === 0 ? 0 : index * 100}
							>
								<EcoSystemBox 
									background={index % 2 === 0 ? 'blue' : 'purple'}
									icon={item.image}
									description={`${item.description}.`}
									title={item.title}
									size="lg"
								/>
							</Fade>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
