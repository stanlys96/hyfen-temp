import React, { useState } from 'react'
import {
	Envelope,
	EnvelopeOff,
	Eye,
	EyeOff,
	Flag,
	FlagOff,
	IconSearch,
} from '../Icons-V2'
import Lock from '../Icons-V2/Lock'
import LockOff from '../Icons-V2/LockOff'
import { RoninBig, Telegram, Discord } from '../Icons-V2/Hyfen-V2'
import Phone from '../Icons-V2/Phone'

export const FormInput = ({
	label,
	placeholder,
	type,
	name,
	value,
	disabled,
	typeForm,
	onChange,
	readonly,
	classRoot,
	classLabel,
	classInput,
	required,
	notes,
	isError,
	classNotes,
	ref,
	onFocus,
	withIcon = true,
}) => {
	const [showPassword, setshowPassword] = useState(false)

	return (
		<div
			className={['relative flex flex-col gap-[8px] w-full', classRoot].join(
				' '
			)}
		>
			{/* Label */}
			{label && (
				<label
					htmlFor={name}
					className={['text-label text-white capitalize', classLabel].join(' ')}
				>
					{label}
					{required && '*'}
				</label>
			)}

			{/* Input */}
			<div className='relative w-full'>
				<input
					ref={ref}
					type={
						typeForm?.includes('password')
							? showPassword
								? 'text'
								: 'password'
							: type
					}
					name={name}
					value={value ?? ''}
					onChange={onChange}
					disabled={disabled}
					readOnly={readonly}
					required={required}
					onFocus={onFocus}
					className={[
						`relative w-full ${
							withIcon ? 'pl-12' : ''
						} p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize`,
						disabled &&
							'cursor-not-allowed disabled:opacity-60 bg-app-shade/50',
						isError && 'border-app-red',
						classInput,
					].join(' ')}
					placeholder={placeholder}
				/>

				{/* Notes  */}
				{notes && (
					<div className='relative mt-[8px]'>
						<p
							className={[
								'text-[14px] font-light',
								isError ? 'text-app-red' : 'text-app-shade',
								classNotes,
							].join(' ')}
						>
							{notes}
						</p>
					</div>
				)}

				{/* Icon Form */}
				{typeForm === 'email' && (
					<span className='absolute top-4 left-4 select-none'>
						{value ? <Envelope /> : <EnvelopeOff />}
					</span>
				)}

				{/* Icon Password */}
				{typeForm === 'password' && (
					<span className='absolute top-4 left-4 select-none'>
						{value ? <Lock /> : <LockOff />}
					</span>
				)}

				{/* Icon Guild */}
				{typeForm === 'guild' && (
					<span className='absolute top-4 left-4 select-none'>
						{value ? <Flag /> : <FlagOff />}
					</span>
				)}

				{/* Icon Search */}
				{typeForm === 'search' && (
					<span className='absolute top-5 left-4 select-none'>
						<IconSearch className='text-app-shade' />
					</span>
				)}

				{/* Icon Ronnin Walet */}
				{typeForm === 'roninWallet' && (
					<span className='absolute top-3 left-4 select-none'>
						<RoninBig />
					</span>
				)}

				{/* Icon Phone */}
				{typeForm === 'phone' && (
					<span className='absolute top-4 left-4 select-none'>
						<Phone />
					</span>
				)}

				{/* Icon Telegram */}
				{typeForm === 'telegram' && (
					<span className='absolute top-4 left-4 select-none'>
						<Telegram
							className={[
								'transition-all duration-300',
								value ? 'opacity-100' : 'opacity-10',
							].join(' ')}
						/>
					</span>
				)}

				{/* Icon Discord */}
				{typeForm === 'discord' && (
					<span className='absolute top-4 left-4 cursor-pointer select-none'>
						<Discord
							className={[
								'transition-all duration-300',
								value ? 'opacity-100' : 'opacity-10',
							].join(' ')}
						/>
					</span>
				)}

				{/* End Icon Form */}

				{/* When form is password show eye  */}
				{typeForm?.includes('password') && !disabled && (
					<span
						className='absolute top-4 right-4 cursor-pointer select-none'
						onClick={() => setshowPassword(!showPassword)}
					>
						{showPassword ? <Eye /> : <EyeOff />}
					</span>
				)}
			</div>
		</div>
	)
}
