import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Children } from 'react'

let mouseX = 0
let mouseY = 0
let ballX = 0
let ballY = 0
let speed = 0.2

const ActiveLink = ({
	children,
	activeClassName,
	inActiveClassName,
	...props
}) => {
	const { asPath } = useRouter()

	const textHoverRef = React.useRef(null)

	const disabledLink = React.useMemo(() => {
		return props.disabled
	}, [props.disabled])

	const animate = React.useCallback(() => {
		if (disabledLink === false) return
		if (textHoverRef && textHoverRef.current) {
			let distX = mouseX - ballX
			let distY = mouseY - ballY
			ballX = ballX + distX * speed
			ballY = ballY + distY * speed
			textHoverRef.current.style.left = ballX + 'px'
			textHoverRef.current.style.top = ballY + 'px'
		}

		requestAnimationFrame(animate)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textHoverRef, mouseX, mouseY, ballX, ballY, disabledLink])

	React.useEffect(() => {
		if (disabledLink === false) return

		const onMouseMove = (event) => {
			mouseX = event.pageX
			mouseY = event.pageY
		}

		document.addEventListener('mousemove', onMouseMove)

		animate()

		return () => document.removeEventListener('mousemove', onMouseMove)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [disabledLink])

	const child = Children.only(children)
	const childClassName = child.props.className || ''
	const className = (
		props.href === '/' ? asPath === props.href : asPath.startsWith(props.href)
	)
		? `${childClassName} ${activeClassName}`
		: `${childClassName} ${inActiveClassName}`

	return (
		<Link
			legacyBehavior
			passHref
			{...props}
			href={disabledLink ? '#' : props.href}
		>
			<div
				className={`hover-link-wrapper ${
					disabledLink === true ? '' : 'hidden-text'
				}`}
			>
				<div ref={textHoverRef} className={`text-link`}>
					Coming soon
				</div>
				{React.cloneElement(child, {
					className: className || null,
				})}
			</div>
		</Link>
	)
}

export default ActiveLink
