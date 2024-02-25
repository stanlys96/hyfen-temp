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
				password_confirmation: '',
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
				password_confirmation: yup
					.string()
					.when('password', {
						is: (val) => (val && val.length > 0 ? true : false),
						then: () =>
							yup
								.string()
								.oneOf(
									[yup.ref('password')],
									'Both password need to be the same'
								),
					})
					.required('Confirm Password is required')
					.trim('Confirm Password is required'),
			}),
			onSubmit: async (values) => {
				console.log(values)
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
			heading={'Sign Up'}
			withIcon={false}
			// icon={titleStep[currentStep]?.icon}
			desc={'Create an account'}
		>
			<div className='relative w-full mx-auto container max-w-2xl mt-4'>
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
					<FormInput
						label={'Confirm Password'}
						placeholder={'Confirm Password'}
						typeForm='password'
						value={values.password_confirmation}
						onBlur={handleBlur}
						onChange={handleChange}
						name='password_confirmation'
						required={true}
						type='password'
						isError={!isValid}
						notes={errors.password_confirmation}
					/>

					<ButtonAuth
						typeButton='submit'
						isDisabled={!isValid}
						className='w-[330px] mt-8'
					>
						Sign Up
					</ButtonAuth>
				</form>
			</div>

			<div className='relative flex gap-x-2 items-center'>
				<span className='text-white mt-[16px]'>Have an account?</span>
				<LinkAuth
					href='/login'
					className='items-center text-white text-[#16AFF0]'
				>
					Login
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default ForgotPassword
