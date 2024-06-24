import Verif from '../components/Layouts/Verif'
import { useState } from 'react'
import { FormInput } from '../components/molecules/FormInput'
import LinkAuth from '../components/LinkAuth'
import ButtonAuth from '../components/atoms/ButtonAuth'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { HeaderHyfen } from '../components/HeaderHyfen'
import { ArrowRight } from '../components/Icons'
import CountryModal from '../components/CountryModal'
import { axiosBackend, loginAxios } from '../utils/axios'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import {
	setEmail,
	setPassword,
	setVerificationToken,
} from '../src/stores/user-slice'

const ForgotPassword = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [showModal, setShowModal] = useState(false)
	const { values, errors, handleBlur, handleSubmit, isValid, setFieldValue } =
		useFormik({
			initialValues: {
				password: '',
				email: '',
				password_confirmation: '',
				fullName: '',
				nationalID: '',
				country: {
					name: 'Choose Country',
					code: '',
				},
			},
			validationSchema: yup.object({
				fullName: yup.string().required('Full Name is required'),
				nationalID: yup.string().required('National ID is required'),
				country: yup.object({
					name: yup.string().required('Country is required'),
					code: yup.string().required('Country is required'),
				}),
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
				try {
					const result = await axiosBackend.post('/auth/register', {
						fullName: values.fullName,
						nationalID: values.nationalID,
						countryCode: values.country.code,
						country: values.country.name,
						password: values.password,
						email: values.email,
					})
					try {
						await loginAxios.post('/userRampable/register', {
							full_name: values.fullName,
							national_id: values.nationalID,
							country_code: values.country.code,
							country: values.country.name,
							password: values.password,
							email: values.email,
						})
					} catch (e) {
						console.log(e)
					}

					if (result?.data?.statusCode === 200) {
						dispatch(setEmail(values.email))
						dispatch(
							setVerificationToken(result?.data?.data?.verificationToken)
						)
						await loginAxios.post('/userRampable/update', {
							email: values.email,
							verification_token: result?.data?.data?.verificationToken,
							access_token: 'xxx',
							organization_id: 'xxx',
							organization_name: 'xxx',
						})
						dispatch(setPassword(values.password))
						Swal.fire({
							icon: 'success',
							title: 'Success',
							text: 'Please check your email and verify your account!',
							showCancelButton: false,
							confirmButtonText: 'OK',
						}).then((result) => {
							/* Read more about isConfirmed, isDenied below */
							if (result.isConfirmed || result.isDismissed) {
								router.replace('/code-verif')
							} else if (result.isDenied) {
								Swal.fire('Changes are not saved', '', 'info')
							}
						})
					} else {
						Swal.fire({
							title: 'The User?',
							text: result?.data?.message ?? '',
							icon: 'question',
						})
					}
				} catch (error) {
					Swal.fire({
						title: 'The User?',
						text: error?.response?.data?.message ?? '',
						icon: 'question',
					})
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
			<CountryModal
				showModal={showModal}
				setShowModal={setShowModal}
				setFieldValue={setFieldValue}
			/>
			<HeaderHyfen />
			<div className='relative w-full mx-auto container max-w-2xl mt-4'>
				<form
					onSubmit={handleSubmit}
					className='w-full relative flex flex-col justify-center items-center gap-4'
				>
					<div className='flex gap-x-4 w-full md:flex-row flex-col'>
						<div className='w-full flex-auto flex flex-col gap-y-4'>
							<FormInput
								label={'Email Address'}
								placeholder={'Email Address'}
								typeForm='email'
								value={values.email}
								onBlur={handleBlur}
								onChange={(e) => setFieldValue('email', e.target.value)}
								name='email'
								required={true}
								type='email'
								isError={errors.email}
								notes={errors.email}
								classRoot={'w-full'}
							/>
							<FormInput
								label={'Password'}
								placeholder={'Password'}
								typeForm='password'
								value={values.password}
								onBlur={handleBlur}
								onChange={(e) => setFieldValue('password', e.target.value)}
								name='password'
								required={true}
								type='password'
								isError={errors.password}
								notes={errors.password}
								classRoot={'w-full'}
							/>
							<FormInput
								label={'Confirm Password'}
								placeholder={'Confirm Password'}
								typeForm='password'
								value={values.password_confirmation}
								onBlur={handleBlur}
								onChange={(e) =>
									setFieldValue('password_confirmation', e.target.value)
								}
								name='password_confirmation'
								required={true}
								type='password'
								isError={!isValid}
								notes={errors.password_confirmation}
							/>
						</div>
						<div className='w-full mt-4 md:mt-0 flex-auto flex flex-col gap-y-4'>
							<FormInput
								label={'Full Name'}
								placeholder={'Full Name'}
								typeForm='guild'
								value={values.fullName}
								onBlur={handleBlur}
								onChange={(e) => setFieldValue('fullName', e.target.value)}
								name='fullName'
								required={true}
								type='text'
								isError={errors.fullName}
								notes={errors.fullName}
							/>
							<FormInput
								label={'National/Passport ID'}
								placeholder={'National/Passport ID'}
								typeForm='guild'
								value={values.nationalID}
								onBlur={handleBlur}
								onChange={(e) => setFieldValue('nationalID', e.target.value)}
								name='nationalID'
								required={true}
								type='nationalID'
								isError={errors.nationalID}
								notes={errors.nationalID}
							/>
							<div className='flex flex-col gap-[8px]'>
								<p className='text-label text-white capitalize'>Country*</p>
								<div
									onClick={() => {
										// if (waitApproval) return
										setShowModal(true)
									}}
									className='cursor-pointer flex justify-between items-center p-[16px] focus:outline-none focus:ring-0 focus:border-app-purple/50 rounded-[10px] text-label text-white bg-app-background border border-app-disabled/20 placeholder:capitalize'
								>
									<div className='flex gap-x-4 items-center'>
										{/* <Image
										width={30}
										height={30}
										alt='provider'
										src={selectedProvider.imgUrl}
										className='w-8 h-8 rounded-full'
									/> */}
										<p className='font-normal text-white text-ellipsis w-fit'>
											{values?.country?.name}
										</p>
									</div>

									<ArrowRight className='fill-current h-4 ' />
								</div>
								<div className='relative'>
									<p
										className={['text-[14px] font-light', 'text-app-red'].join(
											' '
										)}
									>
										{errors?.country?.code}
									</p>
								</div>
							</div>
						</div>
					</div>
					<ButtonAuth
						typeButton='submit'
						isDisabled={!isValid}
						className='w-[330px] mt-4'
					>
						Sign Up
					</ButtonAuth>
				</form>
			</div>

			<div className='relative flex gap-x-2 items-center md:pt-0 pt-[100px]'>
				<span className='text-white mt-[16px]'>Have an account?</span>
				<LinkAuth
					href='/login'
					className='items-center'
					textColor='text-[#2EB4ED]'
				>
					Login
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default ForgotPassword
