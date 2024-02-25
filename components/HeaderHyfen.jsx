import HyfenLogo from './Icons-V2/HyfenLogo'
import Cross from './Icons-V2/Cross'
import { useRouter } from 'next/router'

export const HeaderHyfen = () => {
	const router = useRouter()
	return (
		<div className='absolute top-4 flex justify-between items-center w-full md:px-[40px]'>
			<HyfenLogo />
			<a onClick={() => router.push('/hyfen-ramp')} className='cursor-pointer '>
				<Cross />
			</a>
		</div>
	)
}
