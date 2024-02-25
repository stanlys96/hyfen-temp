import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListSubMenu({ submenu, t }) {
	return (
		<li
			className={[
				' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700',
				submenu.active && 'hover:bg-gray-100',
			].join(' ')}
		>
			<Link legacyBehavior passHref href={submenu.link}>
				<a
					className={`${
						submenu.active ? '' : 'text-black-50 cursor-not-allowed'
					} font-bold flex items-center`}
				>
					<p className='inline-block mr-2'>{t(submenu.title)}</p>
					{submenu.withIcon && (
						<Image
							src='/images/home/guidebook-icon-black.svg'
							height={15}
							width={15}
							alt='icon'
						/>
					)}
				</a>
			</Link>
		</li>
	)
}
