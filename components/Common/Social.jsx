import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'

export const Social = ({
	width = 17,
	height = 17,
	className,
	mediaSocialsData,
}) => {
	return (
		<div className={cx(className)}>
			{mediaSocialsData.map((item, i) => (
				<Link
					legacyBehavior
					passHref
					key={i}
					href={`${item.link}`}
					className='icon-social inline-block'
					target='_blank'
					rel='noreferrer'
				>
					<a>
						<Image
							src={item.imageUrl}
							className='block py-2'
							width={width}
							height={height}
							alt='BaseLogo'
							layout='intrinsic'
							quality={100}
						/>
					</a>
				</Link>
			))}
		</div>
	)
}
