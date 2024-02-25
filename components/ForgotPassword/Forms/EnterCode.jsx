// import { resetPasswordRequest, resetPasswordVerify } from '@services'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ButtonAuth from '../../atoms/ButtonAuth'
import ButtonV2 from '../../atoms/ButtonV2'
import InputOTP from '../../atoms/InputOTP'
// import { useSnackbar } from 'src/components/Snackbar'
// import useTranslation from 'src/hooks/useTranslation'

const EnterCode = ({ changeStep, setUrl, email }) => {
	// const { account } = useTranslation()
	const [otp, setOtp] = useState('')
	const onChange = (value) => setOtp(value)
	const [counter, setCounter] = useState(60)
	const [isError, setisError] = useState(false)

	// const snackbar = useSnackbar()

	const onResend = async () => {
		try {
			if (email) {
				// await resetPasswordRequest({ email })
				// set counter back to 60
				setCounter(60)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.data === 'user_not_found') {
					// snackbar.error({
					// 	title: account.user_not_found,
					// 	description: account.user_not_found_desc,
					// })
				}
			}
		}
	}

	const handlerSubmit = async (e) => {
		changeStep(2)
		e.preventDefault()
		setisError(false)
		try {
			// const response = await resetPasswordVerify({
			// 	code: otp,
			// 	email,
			// })

			// snackbar.success({
			// 	title: account.code_verified,
			// 	description: account.code_verified_desc,
			// })
			setUrl('')
			changeStep(2)
		} catch (error) {
			setisError(true)
			if (axios.isAxiosError(error)) {
				if (error.response?.data === 'verification_invalid') {
					// snackbar.error({
					// 	title: account.wrong_code,
					// 	description: account.wrong_code_desc,
					// })
				}

				if (error.response?.data === 'verification_expired') {
					// snackbar.error({
					// 	title: account.code_expired,
					// 	description: account.code_expired_desc,
					// })
				}

				// snackbar.error({
				// 	title: account.something_went_wrong,
				// 	description: account.try_later,
				// })
			}
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevState) => {
				if (prevState <= 0) {
					clearInterval(interval)
					return 0
				}

				return prevState - 1
			})
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [counter])

	return (
		<div className='relative flex flex-col gap-4 justify-center items-center mt-[33px] w-full max-w-md'>
			<form
				onSubmit={handlerSubmit}
				className='relative flex flex-col gap-4 justify-center items-center'
			>
				<InputOTP
					isError={isError}
					value={otp}
					valueLength={6}
					onChange={onChange}
				/>

				<div className='relative py-2 '>
					<p className='text-sm text-app-red tracking-wide'>Code is wrong</p>
				</div>

				<ButtonAuth
					typeButton='submit'
					isDisabled={otp.length < 6}
					className='w-[330px]'
				>
					Verify
				</ButtonAuth>
			</form>

			<div className='realative text-center flex flex-col justify-center items-center'>
				<div className='text-white/50'>Did not receive email?</div>
				{counter !== 0 ? (
					<div className='inline-block'>
						<span className='text-center text-white/50'>Resend email in:</span>
						<span className='text-center  text-white/50 ml-1'>
							00:{counter < 10 ? `0${counter}` : counter}
						</span>
					</div>
				) : (
					<ButtonV2
						onClick={() => onResend()}
						type='button'
						variant='primary'
						className='mt-2'
					>
						Resend Email
					</ButtonV2>
				)}
			</div>
		</div>
	)
}

export default EnterCode
