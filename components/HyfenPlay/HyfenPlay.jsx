import useTranslation from 'next-translate/useTranslation'
import { hyfenPlayFeatures } from '../../mock/hyfen-play'
import SilderFeature from '../Common/SliderFeature'
import Enjoying from './Enjoying'
import FairFunSimple from './FairFunSimple'
import HeroHyfenPlay from './HeroHyfenPlay'

export default function HyfenPlay() {
	const { t } = useTranslation('hyfen-play')

	return (
		<div className='relative overflow-hidden'>
			<div className='bg-hyfen-play'>
				<HeroHyfenPlay />
			</div>
			<div className='bg-fair-fun-simple'>
				<FairFunSimple />
			</div>
			<div className='bg-fair-fun-simple'>
				<SilderFeature
					items={hyfenPlayFeatures}
					title={t('Your Gaming Needs in One App')}
					button={null}
					translation='hyfen-play'
					titleGradient={true}
				/>
			</div>
			<div className='bg-fair-fun-simple pt-12'>
				<Enjoying />
			</div>
		</div>
	)
}
