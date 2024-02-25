import Link from 'next/link'
import React from 'react'

export default function LinkAuth({
	className,
	href,
	textOne,
	textTwo,
	children,
	marginTop = true,
	textColor = 'text-app-disabled',
}) {
	return (
		<Link legacyBehavior passHref href={href}>
			<a
				className={[
					`${textColor} font-light text-center ${
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
