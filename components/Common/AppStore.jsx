import cx from 'classnames'
import Image from 'next/image'

export const AppStore = ({ width = 128, height = 36, className }) => {
	return (
		<div className={cx('flex justify-center items-center space-x-6', className)}>
			<span>
				<Image
					src='/images/AppStore.png'
					alt='appstore'
					layout='fixed'
					width={width}
					height={height}
					quality={100}
				/>
			</span>
			<span>
				<Image
					src='/images/GooglePlay.png'
					alt='googleplay'
					layout='fixed'
					width={width}
					height={height}
					quality={100}
				/>
			</span>
		</div>
	)
}
