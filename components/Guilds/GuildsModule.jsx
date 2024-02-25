import Ambitious from '../Home/Ambitious'
import React from 'react'
import OurEcosystem from './OurEcosystem'
import SideBar from './SideBar'
import SilderFeature from '../Common/SliderFeature'
import { guildFeatures } from '../../mock/guilds'
import useTranslation from 'next-translate/useTranslation'
import BackgroundGradients from '../Common/BackgroundGradients'

const GuildsModule = () => {
	const { t } = useTranslation('guilds')

	return (
		<div className='bg-black-400'>
			<BackgroundGradients>
				<SideBar />
				<OurEcosystem />
			</BackgroundGradients>
			<div className='pt-[150px] pb-[120px]'>
				<SilderFeature 
					items={guildFeatures} 
					translation="guilds" 
					title={t('Designed by Guilds, for Guilds')}
					button={null} 
				/>
			</div>
			<div>
				<Ambitious tr={'guilds'}/>
			</div>
		</div>
	)
}

export default GuildsModule