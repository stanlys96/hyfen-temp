import React, { useRef, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { textInputData } from '../../mock/contact'
import { Fade } from 'react-reveal'
import emailjs from '@emailjs/browser'
import { Circles } from 'react-loader-spinner'
import Swal from 'sweetalert2'
import ReCAPTCHA from 'react-google-recaptcha'

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

function ContactContent() {
	const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

	const { t } = useTranslation('contact')
	const form = useRef()
	const captchaRef = useRef(null)
	const [isLoading, setIsLoading] = useState(false)
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [question, setQuestion] = useState('General Inquiry')
	const [textArea, setTextArea] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [nameError, setNameError] = useState(false)
	const [textAreaError, setTextAreaError] = useState(false)
	const [captcha, setCaptcha] = useState(false)
	const [captchaError, setCaptchaError] = useState(false)
	const [emailErrorMessage, setEmailErrorMessage] = useState('')
	const [nameErrorMessage, setNameErrorMessage] = useState('')
	const [textAreaErrorMessage, setTextAreaErrorMessage] = useState('')
	const [captchaErrorMessage, setCaptchaErrorMessage] = useState('')

	const sendEmail = (e) => {
		if (isLoading) return
		let foundError = false
		let foundEmailError = false
		if (!captcha) {
			setCaptchaError(true)
			setCaptchaErrorMessage('Please tick the box.')
			setTimeout(() => {
				setCaptchaError(false)
				setCaptchaErrorMessage('')
			}, 3000)
			foundError = true
		}
		if (userName === '') {
			setNameError(true)
			setNameErrorMessage('Field cannot be empty.')
			setTimeout(() => {
				setNameError(false)
				setNameErrorMessage('')
			}, 3000)
			foundError = true
		}
		if (userEmail === '') {
			setEmailError(true)
			setEmailErrorMessage('Field cannot be empty.')
			setTimeout(() => {
				setEmailError(false)
				setEmailErrorMessage('')
			}, 3000)
			foundError = true
			foundEmailError = true
		}
		if (!regEmail.test(userEmail) && !foundEmailError) {
			setEmailError(true)
			setEmailErrorMessage('Email format is wrong. Please try again.')
			setTimeout(() => {
				setEmailError(false)
				setEmailErrorMessage('')
			}, 3000)
			foundError = true
		}
		if (textArea === '') {
			setTextAreaError(true)
			setTextAreaErrorMessage('Field cannot be empty.')
			setTimeout(() => {
				setTextAreaError(false)
				setTextAreaErrorMessage('')
			}, 3000)
			foundError = true
		}
		if (foundError) {
			return
		}
		setIsLoading(true)
		e.preventDefault()
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text)
					captchaRef.current.reset()
					setIsLoading(false)
					setUserName('')
					setUserEmail('')
					setQuestion('General Inquiry')
					setTextArea('')
					setCaptcha(false)
					setCaptchaError(false)
					Toast.fire({
						icon: 'success',
						title: 'Successfully sent email!',
					})
				},
				(error) => {
					console.log(error)
					setIsLoading(false)
				}
			)
			.catch((error) => {
				console.log(error)
				setIsLoading(false)
			})
	}

	return (
		<div className='about-content py-12'>
			<div className='container mx-auto'>
				<form ref={form}>
					<div className='grid grid-rows-1 gap-y-6 md:gap-y-0 md:grid-cols-2 w-full gap-x-12'>
						{textInputData.map((data, i) => (
							<Fade key={i} left={i % 2 == 0} right={i % 2 != 0}>
								<InputTextWithIcon
									setUserEmail={setUserEmail}
									setUserName={setUserName}
									userEmail={userEmail}
									userName={userName}
									imageUrl={data.imageUrl}
									title={t(data.code)}
									placeholder={t(data.placeholder)}
									key={i}
									thisType={data.type}
									emailError={emailError}
									emailErrorMessage={emailErrorMessage}
									nameError={nameError}
									nameErrorMessage={nameErrorMessage}
								/>
							</Fade>
						))}
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 w-full gap-x-12'>
						<Fade left>
							<InputDropdown
								question={question}
								setQuestion={setQuestion}
								title={t('Your Inquiry')}
							/>
						</Fade>
					</div>
					<div className='flex flex-col items-start'>
						<InputTextArea
							setTextArea={setTextArea}
							textArea={textArea}
							title={t('Message')}
							placeholder={t('Place Message')}
							textAreaError={textAreaError}
							textAreaErrorMessage={textAreaErrorMessage}
						/>
						<Fade left>
							<div>
								<ReCAPTCHA
									ref={captchaRef}
									value={captcha}
									sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
									onChange={() => {
										setCaptcha(!captcha)
									}}
								/>
								{captchaError && (
									<p className='mt-3 text-red-500'>{captchaErrorMessage}</p>
								)}
							</div>
						</Fade>
						<Fade left>
							<div className='w-full flex justify-center md:w-fit'>
								<a
									onClick={sendEmail}
									className='mx-auto header__download-button text-slate-900 bg-white py-3 px-6 text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center justify-start'
								>
									{isLoading ? (
										<Circles
											height='20'
											width='20'
											color='#4fa94d'
											ariaLabel='circles-loading'
											wrapperStyle={{}}
											wrapperClass=''
											visible={true}
										/>
									) : (
										<div className='flex items-center justify-start'>
											<span className='inline-block mr-2'>
												{t('Send Message')}{' '}
											</span>
											<Image
												src={`/images/arrow_right.svg`}
												className='ml-5'
												width={20}
												height={20}
												alt='BaseLogo'
												layout='intrinsic'
												quality={100}
											/>
										</div>
									)}
								</a>
							</div>
						</Fade>
					</div>
				</form>
			</div>
		</div>
	)
}

function InputTextWithIcon({
	imageUrl,
	placeholder,
	title,
	thisType,
	userEmail,
	userName,
	setUserName,
	setUserEmail,
	emailError,
	nameError,
	emailErrorMessage,
	nameErrorMessage,
}) {
	return (
		<div>
			<p className='mb-3'>{title}</p>
			<div className='relative flex items-center'>
				<span className='absolute left-3 top-2'>
					<Image
						src={imageUrl}
						width={24}
						height={24}
						alt='BaseLogo'
						layout='intrinsic'
						quality={100}
					/>
				</span>
				<input
					onChange={(e) => {
						if (thisType === 'email') {
							setUserEmail(e.target.value)
						} else {
							setUserName(e.target.value)
						}
					}}
					value={thisType === 'email' ? userEmail : userName}
					placeholder={placeholder}
					name={thisType === 'email' ? 'user_email' : 'user_name'}
					type={thisType === 'email' ? 'email' : 'text'}
					className='
                        block
                        w-full
                        rounded-md
                        border-contact-select
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        bg-transparent
                        pr-3
                        pl-10
                    '
				/>
			</div>
			{thisType === 'email' && emailError && (
				<p className='mt-3 text-red-500'>{emailErrorMessage}</p>
			)}
			{thisType !== 'email' && nameError && (
				<p className='mt-3 text-red-500'>{nameErrorMessage}</p>
			)}
		</div>
	)
}

function InputDropdown({ title, question, setQuestion }) {
	const { t } = useTranslation('contact')
	return (
		<div className='my-6 md:my-7'>
			<p className='mb-3'>{title}</p>
			<div className='relative flex items-center'>
				<select
					value={question}
					onChange={(e) => {
						setQuestion(e.target.value)
					}}
					placeholder=''
					type='text'
					name='question'
					className='
                    block
                    w-full
                    rounded-md
                    border-contact-select
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    bg-transparent
                    text-white
                    select-contact
                '
				>
					<option value='General Inquiry'>{t('General Inquiry')}</option>
					<option value='Partnership'>{t('Partnership')}</option>
					<option value='Sales'>{t('Sales')}</option>
					<option value='Guild Onboard'>{t('Guild Onboard')}</option>
				</select>
			</div>
		</div>
	)
}

function InputTextArea({
	title,
	textArea,
	setTextArea,
	placeholder,
	textAreaError,
	textAreaErrorMessage,
}) {
	return (
		<div className='mb-5 w-full'>
			<Fade left>
				<div>
					<p className='mb-3'>{title}</p>
					<div className='relative flex items-center'>
						<textarea
							onChange={(e) => {
								setTextArea(e.target.value)
							}}
							value={textArea}
							name='message'
							rows='6'
							placeholder={placeholder}
							className='
                            block
                            w-full
                            rounded-md
                            border-contact-select
                            shadow-sm
                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                            bg-transparent
                        '
						/>
					</div>
					{textAreaError && (
						<p className='mt-3 text-red-500'>{textAreaErrorMessage}</p>
					)}
				</div>
			</Fade>
		</div>
	)
}

export default ContactContent
