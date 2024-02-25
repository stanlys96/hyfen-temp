import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import Section from '../Common/Section'
import React from 'react'
import { Fade } from 'react-reveal';

export default function OurEcosystem() {
	const { t } = useTranslation('home')

	const OurEcosystems = [
		{
			image: '/images/eco-player.svg',
			title: t('Players'),
			description: t('system_desc1'),
		},
		{
			image: '/images/eco-guilds.svg',
			title: t('Guilds'),
			description: t('system_desc2'),
		},
		{
			image: '/images/eco-games.svg',
			title: t('Games'),
			description: t('system_desc3'),
		},
		{
			image: '/images/eco-partners.svg',
			title: t('OffRampPartner'),
			description: t('system_desc4'),
		},
	]

	return (
		<Section size="lg">
			<div className='container mx-auto'>
				<Fade bottom>
					<h2 className='section-title'>
						{t('Our Ecosystem')}
					</h2>
				</Fade>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-10'>
					{OurEcosystems.map((item, index) => (
						<Fade 
							key={item}
							bottom
							delay={index === 0 ? 0 : index * 100}
						>
							<EcoSystemBox 
								background={index % 2 === 0 ? 'blue' : 'purple'}
								icon={item.image}
								description={`${item.description}.`}
								title={item.title}
							/>
						</Fade>
					))}
				</div>
			</div>
		</Section>
	)
}
