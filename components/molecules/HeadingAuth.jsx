import React from 'react'
import DescAuth from '../atoms/DescAuth'
import Heading1 from '../atoms/Heading1'

export default function HeadingAuth({
	className,
	heading,
	desc,
	classHeading,
	classDesc,
	desc2,
}) {
	return (
		<div className={['relative', className].join(' ')}>
			<Heading1 className={classHeading} text={heading} />
			<DescAuth className={classDesc} desc={desc} desc2={desc2} />
		</div>
	)
}
