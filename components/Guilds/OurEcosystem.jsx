import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import { Fade } from 'react-reveal';

export default function OurEcosystem() {
	const { t } = useTranslation('guilds')

	const OurEcosystems = [
		{
			image: '/images/Frame_Secured.svg',
			title: t('SECURE'),
			description: t('You can lend your assets safely without handing out your private keys'),
		},
		{
			image: '/images/Frame_Instant.svg',
			title: t('INSTANT'),
			description: t(`You can distribute your players' earnings in a faster and easier way`),
		},
		{
			image: '/images/Frame_Reliable.svg',
			title: t('RELIABLE'),
			description: t('You can automatically set daily minimum earnings for players to maximize your profitability'),
		}
	]
	// className='grid grid-cols-2 place-content-center md:grid-cols-3 gap-4 md:gap-8'
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
									quality={100}
								/>
							</Fade>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
