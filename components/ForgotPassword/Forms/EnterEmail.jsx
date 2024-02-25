// import { resetPasswordRequest } from '@services'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ButtonAuth from '../../atoms/ButtonAuth'
import { FormInput } from '../../molecules/FormInput'
// import { useSnackbar } from 'src/components/Snackbar'
// import useTranslation from 'src/hooks/useTranslation'
import * as yup from 'yup'

const EnterEmail = ({ changeStep, email, setEmail }) => {
	// const { account } = useTranslation()
	const router = useRouter()
	// const snackbar = useSnackbar()

	const {
		handleChange,
		values,
		errors,
		handleSubmit,
		isValid,
		handleBlur,
		setSubmitting,
		setFieldValue,
	} = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: yup.object({
			email: yup.string().email('Invalid Email').required('Email is required'),
		}),
		onSubmit: async (values) => {
			try {
				setSubmitting(false)
				// await resetPasswordRequest({ email: values.email })
				changeStep(1)

				setEmail(values.email)
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
		},
	})

	useEffect(() => {
		if (email) {
			setFieldValue('email', email, true)
		}
	}, [router, setFieldValue, email])

	return (
		<form
			onSubmit={handleSubmit}
			className='relative flex flex-col justify-center items-center mt-[33px] w-full max-w-md'
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

			<ButtonAuth
				typeButton='submit'
				isDisabled={!isValid}
				className='w-[330px] mt-8'
			>
				Send Code
			</ButtonAuth>
		</form>
	)
}

export default EnterEmail
