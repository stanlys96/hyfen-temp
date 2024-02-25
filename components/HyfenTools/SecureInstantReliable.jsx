import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import Section from '../Common/Section'
import React from 'react'
import { Fade } from 'react-reveal'
import { secureInstantReliable } from '../../mock/hyfen-tools'
import Tilt from 'react-tilt'

export default function SecureInstantReliable() {
	const { t } = useTranslation('hyfen-tools')
	return (
		<Section size='lg'>
			<div className='container mx-auto max-w-7xl relative'>
				<div className='grid px-0 grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 gap-y-16 my-12 md:mt-0'>
					{secureInstantReliable.map((item, index) => (
						<Tilt bottom key={item.code}>
							<Fade bottom delay={index === 0 ? 0 : index * 100}>
								<EcoSystemBox
									background={index % 2 === 0 ? 'blue' : 'purple'}
									icon={item.image}
									description={`${t(item.code + '-desc')}`}
									title={t(item.code)}
									withBorder={true}
									size='fairFunSimple'
									className='md:h-60 h-52'
								/>
							</Fade>
						</Tilt>
					))}
				</div>
			</div>
		</Section>
	)
}
