import React, { useState } from 'react'

const Collapse = ({ children, trigger }) => {
	const [show, setShow] = useState(false)

	const onClick = () => setShow((s) => !s)

	return (
		<>
			{trigger({ show, onClick })}
			<div
				className={`transition-all overflow-hidden ${
					show ? 'block' : 'hidden'
				}`}
			>
				{children}
			</div>
		</>
	)
}

export default Collapse
