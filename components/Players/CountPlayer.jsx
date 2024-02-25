import useTranslation from 'next-translate/useTranslation'

const CountPlayer = () => {
	const { t } = useTranslation('players')
	// const [countLoaded, setCountLoaded] = useState(false)

	return (
		<div className='mt-[52px] mb-56'>
			<p className='text-center mb-[70px] text-base md:text-xl'>
				{t('Community_count')}:
			</p>
			<div className='text-center text-3xl md:text-5xl'>
				{/* <CountUp end={3500} redraw={true}>
					{({ countUpRef, start }) => (
						<VisibilitySensor
							onChange={(e) => {
								if (e && !countLoaded) {
									start(true)
									setCountLoaded(true)
								}
							}}
						>
							<span ref={countUpRef} />
						</VisibilitySensor>
					)}
				</CountUp> */}
				+ Players
			</div>
		</div>
	)
}

export default CountPlayer
