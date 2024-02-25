import React from 'react'
import DescAuth from '../components/atoms/DescAuth'
import Heading1 from '../components/atoms/Heading1'

export default function HeadingAuth({
	className,
	heading,
	desc,
	classHeading,
	classDesc,
	desc2,
}) {
	return (
		<div className={['relative mt-[32px]', className].join(' ')}>
			<Heading1 className={classHeading} text={heading} />
			<DescAuth className={classDesc} desc={desc} desc2={desc2} />
		</div>
	)
}
