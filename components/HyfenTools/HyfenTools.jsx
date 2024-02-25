import React from 'react'
import HeroHyfenTools from './HeroHyfenTools'
import SecureInstantReliable from './SecureInstantReliable'
import { hyfenToolsFeatures } from '../../mock/hyfen-tools'
import SilderFeature from '../Common/SliderFeature'
import useTranslation from 'next-translate/useTranslation'

export default function HyfenTools() {
	const { t } = useTranslation('hyfen-tools')
	return (
		<div className='overflow-hidden'>
			<div className='bg-hyfen-play relative'>
				<HeroHyfenTools />
			</div>
			<div className='bg-fair-fun-simple relative'>
				<SecureInstantReliable />
			</div>
			<div className='bg-fair-fun-simple pb-24'>
				<SilderFeature
					items={hyfenToolsFeatures}
					title={t('Designed by Guilds')}
					button={null}
					translation='hyfen-tools'
					titleGradient={true}
				/>
			</div>
		</div>
	)
}
