import React from 'react'
import Enjoying from './Enjoying'
import OurEcosystem from './OurEcosystem'
import { SideBar } from './SideBar'
import SilderFeature from '../Common/SliderFeature'
import { playerFeatures } from '../../mock/players'
import useTranslation from 'next-translate/useTranslation'
import BackgroundGradients from '../Common/BackgroundGradients'
import CountPlayer from './CountPlayer'

function Player() {
	const { t } = useTranslation('players') 
	return (
		<div className='bg-black-400'>
			<BackgroundGradients>
				<SideBar />
				<OurEcosystem />
			</BackgroundGradients>
			<CountPlayer />
			<SilderFeature 
				items={playerFeatures} 
				title={t('Your Gaming Needs in One App')}
				button={null}
				translation="players"
			/> 
			<div className='mt-52 md:mt-56 mb-0'>
				<Enjoying />
			</div>
		</div>
	)
}

export default Player
