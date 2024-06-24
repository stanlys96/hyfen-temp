import Verif from '../components/Layouts/Verif'
import { FormInput } from '../components/molecules/FormInput'
import LinkAuth from '../components/LinkAuth'
import ButtonAuth from '../components/atoms/ButtonAuth'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { HeaderHyfen } from '../components/HeaderHyfen'
import { axiosBackend, axiosSecondary, loginAxios } from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCurrentUser,
	setEmail,
	setVerificationToken,
} from '../src/stores/user-slice'
import Swal from 'sweetalert2'
import { setAccessToken } from '../src/stores/user-slice'

const ForgotPassword = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { method } = useSelector((state) => state.user)
	const { values, errors, handleBlur, handleChange, handleSubmit, isValid } =
		useFormik({
			initialValues: {
				password: '',
				email: '',
			},
			validationSchema: yup.object({
				password: yup
					.string()
					.required('Password is required')
					.trim(`'${'Password is required'}'`)
					.min(8, 'Must contain 8 characters'),
				email: yup
					.string()
					.email('Invalid Email')
					.required('Email is required'),
			}),
			onSubmit: async (formValues) => {
				try {
					const data = await axiosBackend.post('/auth/login', {
						email: formValues.email,
						password: formValues.password,
					})
					console.log(data, '<<<')
					if (data?.data?.statusCode === 200) {
						const currentUser = await loginAxios.post('/userRampable/login', {
							email: formValues.email,
							password: formValues.password,
						})
						dispatch(setVerificationToken(data?.data?.data?.verificationToken))
						dispatch(setAccessToken(currentUser?.data?.data?.access_token))
						dispatch(
							setCurrentUser({
								id: currentUser?.id,
								...currentUser?.data?.data,
								email: formValues.email,
							})
						)
						dispatch(setEmail(formValues.email))
						if (
							currentUser?.data?.data?.access_token &&
							currentUser?.data?.data?.access_token !== 'xxx'
						) {
							if (method === 'buy') {
								router.replace('/buy-crypto')
							} else {
								router.replace('/sell-crypto')
							}
						} else {
							router.replace('/code-verif')
						}
					}
				} catch (error) {
					let message
					switch (error?.response?.data) {
						case 'user_not_found':
							message = 'User not found!'
							break
						case 'E_INVALID_AUTH_PASSWORD: Password mis-match':
						default:
							message = 'Password mismatch!'
							break
					}
					Swal.fire({
						icon: 'info',
						title: 'Oops...',
						text: message,
					})
					console.log(error)
				}
			},
		})

	return (
		<Verif
			title={'Forgot password?'}
			heading={'Login'}
			withIcon={false}
			// icon={titleStep[currentStep]?.icon}
			desc={
				'You need to login using a Hyfen account before proceeding to your transaction.'
			}
		>
			<HeaderHyfen />
			<div className='relative w-full mx-auto container max-w-2xl mt-14'>
				<form
					onSubmit={handleSubmit}
					className='w-full relative flex flex-col justify-center items-center gap-4'
				>
					<FormInput
						label={'Email Address'}
						placeholder={'Email Address'}
						typeForm='email'
						value={values.email}
						onBlur={handleBlur}
						onChange={handleChange}
						name='email'
						required={true}
						type='email'
						isError={errors.email}
						notes={errors.email}
					/>
					<FormInput
						label={'Password'}
						placeholder={'Password'}
						typeForm='password'
						value={values.password}
						onBlur={handleBlur}
						onChange={handleChange}
						name='password'
						required={true}
						type='password'
						isError={errors.password}
						notes={errors.password}
					/>
					<div className='flex items-start justify-start w-full'>
						<LinkAuth
							href='/forgot'
							className='text-start text-[#9CA3AF]'
							marginTop={false}
						>
							Forgot password?
						</LinkAuth>
					</div>

					<ButtonAuth
						// handlerClick={() => {
						// 	handleSubmit()
						// }}
						typeButton='submit'
						isDisabled={!isValid}
						className='w-[330px] mt-8'
					>
						Login
					</ButtonAuth>
				</form>
			</div>

			<div className='relative flex gap-x-2 items-center'>
				<span className='text-white mt-[16px]'>
					Don&apos;t have an account?
				</span>
				<LinkAuth
					href='/register'
					className='items-center'
					textColor='text-[#2EB4ED]'
				>
					Register
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default ForgotPassword
