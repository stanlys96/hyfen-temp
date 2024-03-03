import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
	const { connectors, connect } = useConnect()
	return (
		<div className='flex justify-center items-center gap-x-4 mt-2 z-100'>
			{connectors.map((connector) => (
				<WalletOption
					key={connector.uid}
					connector={connector}
					onClick={() => connect({ connector })}
				/>
			))}
		</div>
	)
}

function WalletOption({ connector, onClick }) {
	const [ready, setReady] = React.useState(false)

	React.useEffect(() => {
		;(async () => {
			const provider = await connector.getProvider()
			setReady(!!provider)
		})()
	}, [connector])

	return (
		<button
			className='bg-blue rounded-[12px] px-[12px] py-[5px] z-100'
			disabled={!ready}
			onClick={onClick}
		>
			{connector.name}
		</button>
	)
}
