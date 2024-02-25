import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import Section from '../Common/Section'
import React from 'react'
import { Fade } from 'react-reveal'
import { fairFunSimpleData } from '../../mock/hyfen-play'
import Tilt from 'react-tilt'

export default function FairFunSimple() {
	const { t } = useTranslation('hyfen-play')
	return (
		<Section size='lg'>
			<div className='container mx-auto max-w-7xl relative'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 gap-y-16 grid-ar my-12 md:mt-0 content-stretch'>
					{fairFunSimpleData.map((item, index) => (
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
