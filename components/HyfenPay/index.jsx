import useTranslation from 'next-translate/useTranslation'

import { poweringFeature } from '../../mock/hyfen-pay'
import SilderFeature from '../Common/SliderFeature'
import DescriptionSection from './DescriptionSection'
import HeroSection from './HeroSection'
import ManageSection from './ManageSection'
import PointSalesSection from './PointSalesSection'
import SupportSection from './SupportSection'

export default function HyfenPay() {
	const { t } = useTranslation('hyfen-pay')

	return (
		<div className='relative overflow-hidden'>
			<div className='bg-hyfen-play relative'>
				<HeroSection />
			</div>
			<div className='bg-fair-fun-simple  relative'>
				<PointSalesSection />
			</div>
			<div className='bg-fair-fun-simple pb-24'>
				<SilderFeature
					items={poweringFeature}
					title={t('Powering')}
					button={null}
					translation='hyfen-pay'
					titleGradient={true}
				/>
			</div>
			<div className='relative bg-[#1F2244] px-8 py-12'>
				<DescriptionSection />
			</div>

			<div className='bg-app-bg_app px-8 pt-[100px]'>
				<ManageSection />
			</div>

			<div className='bg-app-bg_app px-8 lg:pt-[120px] lg:pb-[120px] py-12'>
				<SupportSection />
			</div>
		</div>
	)
}
