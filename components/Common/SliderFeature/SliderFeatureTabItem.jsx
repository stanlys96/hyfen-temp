import React from 'react'
import Collapse from '@kunukn/react-collapse'
import useTranslation from 'next-translate/useTranslation'

const SliderFeatureTabItem = ({
	title,
	index,
	description,
	active,
	onChange,
	translation,
}) => {
	const { t } = useTranslation(translation)

	return (
		<div
			className='mb-6 xl:mb-8 cursor-pointer'
			onClick={() => onChange(index)}
		>
			<h2
				className={`text-[24px] font-bold transition-all duration-300 mb-3 hover:text-white ${
					active ? 'text-white' : 'text-white/40'
				}`}
			>
				{t(title)}
			</h2>
			<Collapse isOpen={active}>
				<p className='text-[14px] lg:text-[20px] text-white/40'>
					{t(description)}
				</p>
			</Collapse>
		</div>
	)
}

export default SliderFeatureTabItem
