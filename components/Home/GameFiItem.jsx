import React from 'react'
import styles from './GameFiItem.module.css'
// import classNames from 'classnames'

export default function GameFiItem({ children }) {
	return (
		<div className={styles.GameFiItem}>
			<div className='flex items-center'>{children}</div>
		</div>
	)
}
