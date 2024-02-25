import Verif from '../components/Layouts/Verif'
import { useState } from 'react'
import { FormInput } from '../components/molecules/FormInput'
import LinkAuth from '../components/LinkAuth'
import ButtonAuth from '../components/atoms/ButtonAuth'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'

const ForgotPassword = () => {
	const router = useRouter()
	const [url] = useState('')
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
			onSubmit: async (values) => {
				try {
					if (url) {
						// await resetPasswordChange({
						// 	url,
						// 	password: values.password,
						// 	password_confirmation: values.password_confirmation,
						// })

						router.replace('/login')
						// snackbar.success({
						// 	title: account.password_has_been_reset,
						// 	description: account.password_has_been_reset_desc,
						// })
					}
				} catch (error) {
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
						isError={!isValid}
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
						isError={!isValid}
						notes={errors.password}
					/>
					<div className='flex items-start justify-start w-full'>
						<LinkAuth
							href='/forgot'
							className='text-start text-white text-[#888888]'
							marginTop={false}
						>
							Forgot password?
						</LinkAuth>
					</div>

					<ButtonAuth
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
					className='items-center text-white text-[#16AFF0]'
				>
					Register
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default ForgotPassword
