import useTranslation from 'next-translate/useTranslation'

export default function Heading1({ text, addClass }) {
	const { t } = useTranslation()
	return (
		<h1
			className={[
				'text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center lg:text-left font-bold',
				addClass,
			].join(' ')}
		>
			{t(text)}
		</h1>
	)
}
