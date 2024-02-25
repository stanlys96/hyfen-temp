export default function DropdownItem({ children, additionalClassName }) {
	return (
		<div
			className={` dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 ${additionalClassName}`}
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			{children}
		</div>
	)
}
