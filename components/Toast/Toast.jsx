import React from 'react'
import { toast } from 'react-toastify'
import { IconClose } from '../Icons-V2'

const ToastComponent = ({ title, description, background }) => {
	return (
		<div className='rounded-md p-3 -m-3 -mr-6' style={{ background }}>
			<div className='bg-white -my-3 py-3 -mr-3 pl-3 rounded-l-md'>
				<div className='text-base text-app-background font-bold'>{title}</div>
				<div className='flex mt-1.5 items-center text-sm text-app-background'>
					{description}
				</div>
			</div>
		</div>
	)
}

export default class Toast {
	static defaultOptions = {
		closeButton: <IconClose className='text-black-dark h-4 w-4' />,
	}

	static success(props, options) {
		toast.success(<ToastComponent {...props} background='#' />, {
			...this.defaultOptions,
			...options,
		})
	}

	static error(props, options) {
		toast.error(<ToastComponent {...props} background='#' />, {
			...this.defaultOptions,
			...options,
		})
	}

	static info(props, options) {
		toast.info(<ToastComponent {...props} background='#2EC0FF' />, {
			...this.defaultOptions,
			...options,
		})
	}
}
