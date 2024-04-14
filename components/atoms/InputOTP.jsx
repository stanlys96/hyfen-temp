import React, { useMemo } from 'react'

export default function InputOTP({ value, onChange, valueLength, isError }) {
	const RE_DIGIT = new RegExp(/^\d+$/)

	const valueItems = useMemo(() => {
		const valueArray = value.split('')
		const items = []

		for (let i = 0; i < valueLength; i++) {
			const char = valueArray[i]

			if (RE_DIGIT.test(char)) {
				items.push(char)
			} else {
				items.push('')
			}
		}

		return items
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value, valueLength])

	const inputOnChange = (e, idx) => {
		const target = e.target
		let targetValue = target.value
		const isTargetValueDigit = RE_DIGIT.test(targetValue)

		if (!isTargetValueDigit && targetValue !== '') {
			return
		}

		targetValue = isTargetValueDigit ? targetValue : ' '

		const newValue =
			value.substring(0, idx) + targetValue + value.substring(idx + 1)

		onChange(newValue)

		if (!isTargetValueDigit) {
			return
		}

		const nextElementSibling = target.nextElementSibling

		if (nextElementSibling) {
			nextElementSibling.focus()
		}
	}

	const inputOnKeyDown = (e) => {
		const target = e.target

		if (e.key !== 'Backspace' || target.value !== '') {
			return
		}

		const previousElementSibling = target.previousElementSibling

		if (previousElementSibling) {
			previousElementSibling.focus()
		}
	}

	return (
		<div className='relative flex gap-[30px] mt-[33px] flex-wrap md:flex-nowrap items-center justify-center'>
			{valueItems.map((digit, idx) => (
				<input
					key={idx}
					type='text'
					inputMode='numeric'
					autoComplete='one-time-code'
					pattern='\d{1}'
					maxLength={1}
					onKeyDown={inputOnKeyDown}
					onChange={(e) => inputOnChange(e, idx)}
					className={[
						'h-[64px] w-[64px] py-0 bg-app-bgCard rounded-[12px] border border-transparent text-heading1 text-center text-black focus:border-app-primary focus:ring-0 focus:outline-none',
						isError ? 'border-app-red' : 'border-app-primary',
					].join(' ')}
					value={digit}
				/>
			))}
		</div>
	)
}
