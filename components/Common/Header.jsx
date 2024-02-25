import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { languages, menus } from '../../mock'
import Indodax from '../Icons/Indodax'
import Menu from '../Icons/Menu'
import DownloadAppButton from './DownloadAppButton'
import { ButtonLanguage, ListMenu, SubMenu } from './modules'
import SideDrawer from './SideDrawer'

function Header({ fixed = true }) {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)
	const [scrollY, setScrollY] = useState(0)
	const { t, lang } = useTranslation('common')

	useEffect(() => {
		setDomLoaded(true)

		if (open) {
			setOpen(!open)
		}

		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.asPath])

	return domLoaded ? (
		<>
			<Fade top>
				<div
					className={`${
						fixed ? 'fixed' : 'relative'
					} z-100 w-full py-5 bg-transparent transition-all duration-700 ease-in-out ${
						scrollY < 20 ? '' : 'scrolled'
					}`}
				>
					{/* Section Menu */}
					<div className='relative mx-auto container max-w-7xl'>
						{/* Container Menu  */}
						<div className='relative flex justify-between items-center'>
							{/* Icon App */}
							<div>
								<Link legacyBehavior passHref href='/'>
									<a className='flex justify-start items-center '>
										<Image
											src='/images/hyfen-logo.svg'
											className='block py-2'
											alt='BaseLogo'
											width={115}
											height={28}
											layout='fixed'
											quality={100}
										/>
									</a>
								</Link>
								<span className='flex items-end justify-end gap-1 mt-0.5'>
									<p className='text-xs text-white/60'>powered by </p>
									<Indodax className='h-3 text-white' />
								</span>
							</div>

							{/* Mobile Button Menu */}
							<div className='relative md:hidden'>
								<button
									className='flex items-center justify-center ml-auto p-3 md:p-4'
									onClick={() => setOpen((o) => !o)}
								>
									<Menu />
								</button>
							</div>

							{/* Tablet Upper Menu */}
							<div className='relative hidden items-center md:flex gap-[32px]'>
								{/* Nav Section */}
								<nav className='relative items-center flex gap-[32px]'>
									{menus.map((item) =>
										item.submenu?.length > 0 ? (
											// Section Menu Have child
											<SubMenu t={t} menu={item} key={item.id} />
										) : (
											// Menu doesnt have child
											<ListMenu t={t} menu={item} key={item?.id} />
										)
									)}
								</nav>
								<ButtonLanguage lang={lang} languages={languages} />
								<DownloadAppButton />
							</div>
						</div>

						{/* Mobile Menu */}
						<SideDrawer
							setOpen={setOpen}
							handleClose={() => setOpen(false)}
							open={open}
						/>
					</div>
				</div>
			</Fade>
		</>
	) : (
		<></>
	)
}

export default Header
