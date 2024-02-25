import React from 'react'

export default function ButtonAuth({
	className,
	isDisabled,
	typeButton,
	buttonName,
	handlerClick,
	children,
}) {
	return (
		<button
			type={typeButton}
			onClick={handlerClick}
			disabled={isDisabled}
			className={[
				'relative w-full transition-all duration-300 py-[14px] rounded-full text-white',
				isDisabled
					? 'bg-app-disabled cursor-not-allowed disabled:opacity-50'
					: 'bg-app-primary hover:bg-app-primary/80',
				className,
			].join(' ')}
		>
			{children || buttonName}
		</button>
	)
}
