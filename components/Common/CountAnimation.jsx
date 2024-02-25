import React from 'react'
import { useState, useEffect } from 'react'

export default function CountAnimation({ min = 0, max }) {
	const [count, setCount] = useState(0)
	const formatNumber = (n) => {
		return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
	useEffect(() => {
		let timer
		for (let count = min; count <= max; count++) {
			timer = setTimeout(() => {
				setCount(count)
			}, 1000)
		}
		return () => {
			clearTimeout(timer)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return <span>{formatNumber(count)}</span>
}
