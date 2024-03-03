import HyfenLogo from './Icons-V2/HyfenLogo'
import Cross from './Icons-V2/Cross'
import { useRouter } from 'next/router'

export const HeaderHyfen = ({ withWallet, isLoading }) => {
	const router = useRouter()
	return (
		<div className='absolute top-4 flex justify-between items-center w-full md:px-[40px] z-50'>
			<HyfenLogo />
			{withWallet && (isLoading ? <w3m-button disabled /> : <w3m-button />)}
			<a
				onClick={() => {
					if (isLoading) return
					router.push('/hyfen-ramp')
				}}
				className='cursor-pointer '
			>
				<Cross />
			</a>
		</div>
	)
}
