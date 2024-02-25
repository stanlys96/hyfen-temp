// import { resetPasswordChange } from '@services'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ButtonAuth from 'components/atoms/ButtonAuth'
import { FormInput } from '../../molecules/FormInput'
// import useTranslation from 'src/hooks/useTranslation'
import * as yup from 'yup'

const ChangePassword = ({ url }) => {
	// const { account } = useTranslation()
	const router = useRouter()
	const [domLoaded, setDomLoaded] = useState(false)

	// const snackbar = useSnackbar()

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		isSubmitting,
		isValid,
		dirty,
	} = useFormik({
		initialValues: {
			password: '',
			password_confirmation: '',
		},
		validationSchema: yup.object({
			password: yup
				.string()
				.required('Password is required')
				.trim(`'${'Password is required'}'`)
				.min(8, 'Must contain 8 characters'),
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
	useEffect(() => {
		setDomLoaded(true)
	}, [])

	return (
		<div className='relative w-full mx-auto container max-w-2xl mt-14'>
			<form
				onSubmit={handleSubmit}
				className='w-full relative flex flex-col justify-center items-center gap-4'
			>
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
					Reset Password
				</ButtonAuth>
			</form>
		</div>
	)
}

export default ChangePassword
