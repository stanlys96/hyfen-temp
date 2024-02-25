export default function DescAuth({ className, desc, desc2 }) {
	return (
		<div>
			<p
				className={[
					'text-heading5 font-light mt-[8px] ',
					className ?? 'text-app-disabled',
				].join(' ')}
			>
				{desc}
			</p>
			<p
				className={[
					'text-heading5 font-light',
					className ?? 'text-app-disabled',
				].join(' ')}
			>
				{desc2}
			</p>
		</div>
	)
}
