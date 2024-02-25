import { ArrowDown } from '../../Icons'
import React from 'react'
import ListSubMenu from './ListSubMenu'

export default function SubMenu({ menu, t }) {
	return (
		<div className='group hidden md:flex h-full w-full relative'>
			<span className='relative flex items-center text-white-50 hover:text-white transition-all duration-300 overflow-auto'>
				{t(menu.title).replace(/ /g, '\u00A0')}
				<ArrowDown className='fill-current h-4 ' />
			</span>
			<ul
				className={`
        hidden dropdown-menu absolute bg-white text-base z-50 py-2 list-none text-left rounded-lg shadow-lg top-full m-0 bg-clip-padding border-none group-hover:block`}
				aria-labelledby='dropdownMenuButton2'
			>
				{menu.submenu.map((submenu) => (
					<ListSubMenu t={t} submenu={submenu} key={submenu.id} />
				))}
			</ul>
		</div>
	)
}
