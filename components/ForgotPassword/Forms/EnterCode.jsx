import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ButtonAuth from '../../atoms/ButtonAuth'
import ButtonV2 from '../../atoms/ButtonV2'
import InputOTP from '../../atoms/InputOTP'
import { axiosBackend, axiosSecondary, loginAxios } from '../../../utils/axios'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '../../../src/stores/user-slice'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
	toast: true,
	position: 'center',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.close)
	},
})

const EnterCode = ({ changeStep, email, showCounter = true }) => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [otp, setOtp] = useState('')
	const onChange = (value) => setOtp(value)
	const [counter, setCounter] = useState(60)
	const [isError, setisError] = useState(false)
	const { verificationToken, password } = useSelector((state) => state.user)

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
		const currentUser = await loginAxios.post('/userRampable/login', {
			email: email,
			password: password,
		})
		console.log(currentUser?.data?.data)
		try {
			const result = await axiosBackend.post('/auth/verify-login', {
				verificationToken: verificationToken,
				otp,
			})
			console.log(result?.data?.data?.accessToken, '<<<')
			if (result?.data?.message === 'ok') {
				dispatch(setAccessToken(result?.data?.data?.accessToken))
				const updateUser = await loginAxios.post('/userRampable/update', {
					email: email,
					verification_token:
						currentUser?.data?.data?.verification_token ?? 'xxx',
					access_token: result?.data?.data?.accessToken,
					organization_id: 'xxx',
					organization_name: 'xxx',
				})

				Toast.fire({
					icon: 'success',
					title: 'Verification successful!',
				})
				router.replace('/login')
			}
		} catch (error) {
			console.log(error)
			if (
				error?.response?.data?.message === 'jwt expired' ||
				error?.response?.data?.message ===
					'body/verificationToken must NOT have fewer than 1 characters'
			) {
				try {
					const result = await axiosBackend.post('/auth/login', {
						email,
						password,
					})
					await axiosBackend.post('/auth/verify-login', {
						verificationToken: result?.data?.data?.verificationToken,
						otp,
					})
				} catch (e) {
					setisError(true)
				}
			} else {
				setisError(true)
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

				{isError && (
					<div className='relative py-2 '>
						<p className='text-sm text-app-red tracking-wide'>Code is wrong</p>
					</div>
				)}

				<ButtonAuth
					typeButton='submit'
					isDisabled={otp.length < 6}
					className='w-[330px] mt-4'
				>
					Verify
				</ButtonAuth>
			</form>

			{showCounter && (
				<div className='realative text-center flex flex-col justify-center items-center'>
					<div className='text-white/50'>Did not receive email?</div>
					{counter !== 0 ? (
						<div className='inline-block'>
							<span className='text-center text-white/50'>
								Resend email in:
							</span>
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
			)}
		</div>
	)
}

export default EnterCode
