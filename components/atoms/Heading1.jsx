export default function Heading1({ text, className }) {
	return (
		<h1
			className={[
				'text-white text-heading1 font-medium tracking-wide',
				className,
			].join(' ')}
		>
			{text}
		</h1>
	)
}
