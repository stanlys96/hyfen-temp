import Verif from 'components/Layouts/Verif'
import { useState } from 'react'
import ChangePassword from 'components/ForgotPassword/Forms/ChangePassword'
import EnterCode from 'components/ForgotPassword/Forms/EnterCode'
import EnterEmail from 'components/ForgotPassword/Forms/EnterEmail'
import LinkAuth from 'components/LinkAuth'
import { IconArrowLeft } from 'components/Icons-V2'

const _renderStepContent = (
	currentStep,
	changeStep,
	url,
	setUrl,
	email,
	setEmail
) => {
	switch (currentStep) {
		case 0:
			return (
				<EnterEmail changeStep={changeStep} setEmail={setEmail} email={email} />
			)
		case 1:
			return <EnterCode changeStep={changeStep} setUrl={setUrl} email={email} />
		case 2:
			return <ChangePassword url={url} />
	}
}

const ForgotPassword = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [url, setUrl] = useState('')
	const [email, setEmail] = useState('')
	const titleStep = [
		{
			icon: 'email',
			heading: `Forgot password?`,
			desc: "No worries, we'll sent you reset instruction",
		},
		{
			icon: 'email',
			heading: 'Email Verification',
			desc: 'We have sent code to your email',
		},
		{
			icon: 'email',
			heading: 'Password Reset',
			desc: 'Please enter your new password',
		},
	]

	return (
		<Verif
			title={'Forgot password?'}
			heading={titleStep[currentStep]?.heading}
			icon={titleStep[currentStep]?.icon}
			desc={titleStep[currentStep]?.desc}
		>
			{_renderStepContent(
				currentStep,
				setCurrentStep,
				url,
				setUrl,
				email,
				setEmail
			)}

			<div className='relative mt-[16px]'>
				<LinkAuth href='/login' className='flex items-center gap-2 text-white'>
					<IconArrowLeft className='opacity-50 ' />
					Back to login
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default ForgotPassword
