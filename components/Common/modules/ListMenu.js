import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ListMenu({ menu, t }) {
	const router = useRouter()

	return (
		<Link legacyBehavior href={menu?.link} passHref>
			<a
				className={[
					'rounded-full  transition-all duration-300 hover:text-white',
					router.pathname === menu.link
						? 'text-white bg-app-primary px-[20px] py-[8px]'
						: 'text-white/50 p-0',
				].join(' ')}
			>
				{t(menu.title)}
			</a>
		</Link>
	)
}
