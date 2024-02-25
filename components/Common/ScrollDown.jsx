import useTranslation from 'next-translate/useTranslation'
import React from 'react'

const ScrollDown = ({ className }) => {
	const { t } = useTranslation('common')

	return (
		<div className={`flex items-center gap-x-3 ${className}`}>
			<div className='scroll-down' />
			<span className='text-sm text-gray'>{t('Scroll Down')}</span>
		</div>
	)
}

export default ScrollDown
