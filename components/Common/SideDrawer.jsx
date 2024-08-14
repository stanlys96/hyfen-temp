import Indodax from '../Icons/Indodax'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { languages, menus } from '../../mock'
import ArrowDown from '../Icons/ArrowDown'
import Collapse from './Collapse'
import { SocialMedia } from './modules'
import { Ribbon } from '../modules/molecules'

export default function SideDrawer({ open, handleClose }) {
	const router = useRouter()
	const menuDrawer = [...menus]
	const { t, lang } = useTranslation('common')

	return (
		<div
			className={[
				open ? 'w-screen z-50 translate-x-0' : 'translate-x-full w-0 -z-10',
				'sidebar fixed h-screen overflow-scroll bg-app-bg_app top-0 right-0 text-lg transition-all duration-300 ',
			].join(' ')}
		>
			<div className='sidebar-header overflow-y-scroll flex justify-between py-4 pl-3 pr-5 border-b border-white/30'>
				<div className='flex items-center justify-center -mt-1 -ml-1'>
					<div>
						<Link legacyBehavior href='/' passHref>
							<a className='flex justify-center items-center relative w-[145px] h-[44px]'>
								<Image
									src='/images/hyfenlogo.svg'
									alt='BaseLogo'
									width={130}
									height={28}
									layout='fixed'
									quality={100}
								/>
							</a>
						</Link>
					</div>
				</div>
				<div className='flex justify-center items-center' onClick={handleClose}>
					<div className='pr-3'>
						<Image
							src='/images/handleClose.png'
							alt='mobile-logo'
							layout='fixed'
							width='14'
							height='14'
							quality={100}
						/>
					</div>
				</div>
			</div>
			{/* Section Menu */}
			<nav>
				<ul className='relative w-full mt-2 grid'>
					{menuDrawer.map((menu) => (
						<li key={menu.id} className='relative'>
							{menu.submenu?.length ? (
								<div className='relative border-b border-white/20 transition-all duration-300'>
									<Collapse
										trigger={({ show, onClick }) => (
											// Parrent Menu when have child
											<button
												className=' hover:text-blue flex w-full items-center justify-between flex-row font-[700] tracking-wide py-[20px] px-[31px] text-[20px] leading-[26px]'
												onClick={onClick}
											>
												{t(menu.title)}

												<ArrowDown
													className={`fill-current transition-transform ${
														show && 'transform rotate-180'
													}`}
												/>
											</button>
										)}
									>
										{/* Sub Sub Menu  */}
										<ul className='relative grid gap-4 my-2 pb-2'>
											{menu.submenu.map((submenu) => (
												<li
													className='relative py-2 w-full flex px-8 text-[16px]'
													key={submenu.id}
												>
													<Link legacyBehavior passHref href={submenu.link}>
														<div
															className={[
																'relative flex gap-4 py-2 items-center cursor-pointer w-full hover:text-blue',
																router.pathname === submenu.link && 'text-blue',
																submenu.active ? 'text-white' : 'text-white/50',
															].join(' ')}
														>
															<p>{t(submenu.title)}</p>
															{!submenu.active && (
																<span className='bg-app-cyan text-white rounded-full  px-[14px] text-[12px]'>
																	Coming Soon
																</span>
															)}
															{submenu.withIcon && (
																<Image
																	src='/images/home/guidebook-icon.svg'
																	height={20}
																	width={20}
																	alt='icon'
																/>
															)}
														</div>
													</Link>
												</li>
											))}
										</ul>
									</Collapse>
								</div>
							) : (
								// Menu withou having child
								<Link legacyBehavior href={menu.link} passHref>
									<a
										className={[
											'relative border-b text-left border-white/20  w-full block py-[20px] px-[31px] text-[20px] leading-[26px] cursor-pointer font-[700]',
											router.pathname === menu.link && 'text-blue',
										].join(' ')}
									>
										{t(menu.title)}
									</a>
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>
			{/* Section Button Download App */}
			<div className='relative mt-10 px-6 gap-4 flex justify-start items-center'>
				<div className='relative '>
					<Image
						src='/images/App Store.svg'
						height={60}
						width={200}
						quality={100}
						alt='apple-store'
					/>
					<Ribbon />
				</div>
				<Link
					legacyBehavior
					passHref
					href='https://play.google.com/store/apps/details?id=com.metabase.gg'
				>
					<a target='_blank' rel='noopener noreferrer'>
						<Image
							src='/images/Google Play.svg'
							height={60}
							width={200}
							alt='android'
						/>
					</a>
				</Link>
			</div>

			{/* Section Button Language */}
			<div className='relative mt-5'>
				<Collapse
					trigger={({ show, onClick }) => (
						<button
							className='md:hidden flex items-center justify-center w-full hover:text-blue py-2 text-lg font-[400]'
							onClick={onClick}
						>
							<Image
								src='/images/globe.svg'
								className='block py-2 pr-3'
								alt='BaseLogo'
								width={20}
								height={20}
								layout='fixed'
							/>
							<span className='block pl-2'>{lang === 'id' ? 'ID' : 'EN'}</span>
							<ArrowDown
								className={`fill-current transition-transform w-5 h-5 ${
									show && 'transform rotate-180'
								}`}
							/>
						</button>
					)}
				>
					<ul className='relative transition-all duration-300 flex flex-col justify-center items-center'>
						{languages.map((language) => (
							<li key={language.locale} className='text-left font-[400]'>
								<Link
									legacyBehavior
									passHref
									href={`${language.locale}${router.pathname}`}
									locale={language.locale}
								>
									<a className='relative w-fit hover:text-blue py-2 px-4 cursor-pointer text-sm'>
										{language.title} (
										{language.locale === 'en' ? 'English' : 'Bahasa Indonesia'})
									</a>
								</Link>
							</li>
						))}
					</ul>
				</Collapse>
			</div>

			{/* Section Soscial Media */}
			<div className='relative my-12 mx-16'>
				<SocialMedia />
			</div>
		</div>
	)
}
