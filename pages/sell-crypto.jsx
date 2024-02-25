import Head from 'next/head'
import React from 'react'
import { ArrowRight } from '../components/Icons'
import { RoninBig } from '../components/Icons-V2/Hyfen-V2'
import { useState } from 'react'
import { FormInput } from '../components/molecules/FormInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import ArrowRightBlack from '../components/Icons/ArrowRightBlack'
import { HeaderHyfen } from '../components/HeaderHyfen'
import PaymentMethodModal from '../components/PaymentMethodModal'

export default function BuyCrypto() {
	const router = useRouter()
	const [showModal, setShowModal] = useState(false)
	const { values, errors, handleBlur, handleChange } = useFormik({
		initialValues: {
			password: '',
			address: '',
			password_confirmation: '',
			email: '',
			phoneCode: '',
		},
		validationSchema: yup.object({
			password: yup
				.string()
				.required('Password is required')
				.trim(`'${'Password is required'}'`)
				.min(8, 'Must contain 8 characters'),
			address: yup.string().required('Address is required'),
			email: yup.string().email('Invalid Email').required('Email is required'),
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
				// if (true) {
				// await resetPasswordChange({
				// 	url,
				// 	password: values.password,
				// 	password_confirmation: values.password_confirmation,
				// })
				// router.replace('/login')
				// snackbar.success({
				// 	title: account.password_has_been_reset,
				// 	description: account.password_has_been_reset_desc,
				// })
				// }
			} catch (error) {
				console.log(error)
			}
		},
	})
	return (
		<>
			<Head>
				<title>Hyfen GG | Buy Crypto</title>
			</Head>
			<main className='relative h-screen max-h-full w-full bg-app-background'>
				{/* Container */}
				<HeaderHyfen />
				<PaymentMethodModal showModal={showModal} setShowModal={setShowModal} />
				<div className='relative h-full max-w-7xl container mx-auto flex gap-x-5 justify-center items-center h-full pt-[13vh]'>
					{/* Container content */}
					<div className='relative h-full flex flex-col justify-start items-center'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>
								Choose Provider
							</p>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>
								Choose Provider*
							</p>
							<div
								onClick={() => setShowModal(true)}
								className='border border-[#FFFFFF4D] cursor-pointer px-[12px] w-[436px] rounded-[11px] h-[65px] flex justify-between items-center mt-[15px]'
							>
								<div className='flex gap-x-4 items-center'>
									<RoninBig />
									<p className='font-normal text-white'>GoPay</p>
								</div>

								<ArrowRight className='fill-current h-4 ' />
							</div>
							<p className='text-[#9CA3AF] text-[16px] mt-5'>Phone Number*</p>
							<div className='flex gap-x-2 mt-2'>
								<FormInput
									classRoot='flex-1'
									placeholder={'Phone Code'}
									typeForm='phone'
									value={values.phoneCode}
									onBlur={handleBlur}
									onChange={handleChange}
									name='phone'
									required={true}
									isError={errors.phoneCode}
									notes={errors.phoneCode}
								/>
								<FormInput
									classRoot='flex-[2]'
									withIcon={false}
									placeholder={'Input phone number'}
									// typeForm='email'
									value={values.address}
									onBlur={handleBlur}
									onChange={handleChange}
									name='address'
									required={true}
									isError={errors.address}
									notes={errors.address}
								/>
							</div>
						</div>
					</div>
					<div className='relative h-full flex flex-col justify-start items-start'>
						<div className='bg-[#1A1E48] p-[30px] rounded-[10px]'>
							<p className='text-white text-[20px] text-bold'>
								Account Information
							</p>
							<FormInput
								classRoot='mt-5 w-[436px]'
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
							<p className='text-white mt-5 text-[20px] text-bold'>
								Sell Crypto Breakdown
							</p>
							<div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>You will receive</p>
									<p className='text-white'>10,000 IDR</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>You sell</p>
									<p className='text-white'>990 SLP</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white'>Tax & Services</p>
									<p className='text-white'>10 SLP</p>
								</div>
								<div className='flex justify-between mt-4'>
									<p className='text-white font-bold'>
										Gas Fee (make sure it is sufficient)
									</p>
									<p className='text-white font-bold'>0,01 RON</p>
								</div>
								<div className='flex justify-between mt-7'>
									<p className='text-white text-[20px]'>Total Payment</p>
									<p className='text-white text-[20px]'>1,000 SLP</p>
								</div>
							</div>
							<div className='mt-[30px] flex justify-center items-center'>
								<a
									onClick={async () => {
										router.push('/success')
										return
										// if (quoteLoading || disableSwap) return
										// console.log(sendTransaction)
										// sendTransaction()
									}}
									className={`w-full flex items-center gap-x-[12px] justify-center  text-center text-slate-900 bg-white header__download-button py-3 px-11 inline-block text-base font-bold cursor-pointer`}
								>
									<div className='flex items-center h-[30px]'>
										<span>Confirm</span>
										<ArrowRightBlack />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
