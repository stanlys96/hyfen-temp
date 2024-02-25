import useTranslation from 'next-translate/useTranslation'
import React from 'react'

export default function DescHeading({ text, adClass }) {
	const { t } = useTranslation()

	// loop array text and translate

	return (
		<p
			className={[
				'mt-4 text-center font-[400] lg:text-left text-[16px] md:text-[20px] md:pr-24 leading-8 tracking-wide',
				adClass,
			].join(' ')}
		>
			{
				(text = text.map((item) => {
					return t(item)
				}))
			}
		</p>
	)
}
