import Verif from '../components/Layouts/Verif'
import { useState } from 'react'
import EnterCode from '../components/ForgotPassword/Forms/EnterCode'
import LinkAuth from '../components/LinkAuth'
import { IconArrowLeft } from '../components/Icons-V2'
import { HeaderHyfen } from '../components/HeaderHyfen'
import { useSelector } from 'react-redux'

const CodeVerif = () => {
	const [, setCurrentStep] = useState(0)
	const [, setUrl] = useState('')
	const { email } = useSelector((state) => state.user)
	return (
		<Verif
			title={'Forgot password?'}
			heading='Email Verification'
			icon='email'
			desc={`We have sent code to your email ${email}`}
		>
			<HeaderHyfen />
			<EnterCode
				changeStep={setCurrentStep}
				setUrl={setUrl}
				email={email}
				showCounter={false}
			/>

			<div className='relative mt-[16px]'>
				<LinkAuth href='/login' className='flex items-center gap-2 text-white'>
					<IconArrowLeft className='opacity-50 ' />
					Back to login
				</LinkAuth>
			</div>
		</Verif>
	)
}

export default CodeVerif
