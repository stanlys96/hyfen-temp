import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowDown } from '../../Icons'

export default function ButtonLanguage({ lang, languages }) {
	const router = useRouter()

	return (
		<div className='relative text-sm'>
			<div className='group flex h-full w-full relative'>
				<div className='relative flex gap-2 items-center text-white/50'>
					<Image src='/images/globe.svg' width={20} height={20} alt='globe' />
					{lang === 'id' ? 'ID' : 'EN'}
					<ArrowDown className='fill-current w-4 h-4' />
				</div>

				<div className='absolute py-2 top-full group-hover:block hidden'>
					<ul className='relative grid gap-2 bg-white rounded-lg text-black-100 soft-shadow w-36 py-2'>
						{languages.map((language) => (
							<li
								key={language.locale}
								className='relative w-full px-4 py-1.5 text-gray-700 hover:bg-gray-100'
							>
								<Link
									legacyBehavior
									passHref
									href={`${language.locale}${router.pathname}`}
									locale={language.locale}
								>
									<p className='flex font-[700] w-full  cursor-pointer'>
										{language.title} (
										{language.locale === 'en' ? 'English' : 'Indonesia'})
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
