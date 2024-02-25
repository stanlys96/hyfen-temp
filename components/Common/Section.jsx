import React, { useMemo } from 'react'

const Section = (props) => {
	const sizeClass = useMemo(() => {
		const sizeOptions = {
			lg: 'pt-[97px] pb-[97px] md:pt-[120px] md:pb-[120px]',
			xl: 'pt-[180px] pb-[180px]',
		}

		if (!props.size) return
		return sizeOptions[props.size]
	}, [props.size])

	return <div className={`${sizeClass}`}>{props.children}</div>
}

export default Section
