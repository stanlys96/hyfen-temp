import React from 'react'

export default function Heading2({ text, addClass }) {
	return (
		<h2
			className={[
				'text-center md:text-left leading-[31.25px] font-bold text-[20px] md:text-[24px] tracking-wider px-8 md:pl-0 md:pr-14',
				addClass,
			].join(' ')}
		>
			{text}
		</h2>
	)
}
