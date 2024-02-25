import Link from 'next/link'
import React from 'react'

export default function LinkAuth({
	className,
	href,
	textOne,
	textTwo,
	children,
	marginTop = true,
}) {
	return (
		<Link legacyBehavior passHref href={href}>
			<a
				className={[
					`text-app-disabled font-light text-center ${
						marginTop ? 'mt-[16px]' : 'mt-0'
					} hover:text-app-primary transition-all duration-300`,
					className,
				].join(' ')}
			>
				{children || (
					<>
						{textOne + ' '}
						<span className='text-app-primary font-medium'>{textTwo}</span>
					</>
				)}
			</a>
		</Link>
	)
}
