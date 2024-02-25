import React from 'react'

export default function ButtonV2({
	children,
	onClick,
	className,
	disabled,
	type,
	isTransparent,
	variant,
	props,
}) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={[
				'relative text-[14px] flex justify-center items-center transition-all duration-300 px-2.5 py-1.5 rounded-lg shadow-none',
				disabled && 'disabled:opacity-40 cursor-not-allowed',
				variant === 'primary' &&
					'bg-app-primary border border-app-primary text-app-primary hover:bg-app-primary/70 hover:shadow-lg hover:shadow-app-primary/20',
				variant === 'secondary' &&
					'bg-app-purple border border-app-purple text-app-purple hover:shadow-lg hover:shadow-app-purple/20',
				variant === 'disabled' &&
					' border border-app-disabled text-app-disabled',
				isTransparent
					? 'bg-opacity-20 hover:scale-105'
					: 'bg-opacity-100 text-[#fff]',
				className,
			].join(' ')}
			{...props}
		>
			{children}
		</button>
	)
}
