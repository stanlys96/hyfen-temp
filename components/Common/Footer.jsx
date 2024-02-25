import Indodax from '../Icons/Indodax'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fade } from 'react-reveal'
import { SocialMedia } from './modules'

const Footer = ({ bgColor }) => {
	const listMenu = [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'About Us',
			link: '/about',
		},
		{
			title: 'Community',
			link: '/community',
		},
		{
			title: 'Terms and Conditions',
			link: '/terms-and-conditions',
		},
		{
			title: 'Privacy Policy',
			link: '/privacy-policy',
		},
		{
			title: 'Support',
			link: '/contact',
		},
	]
	const { t } = useTranslation('common')
	const router = useRouter()

	return (
		<footer className={`border-t border-slate-500 pt-10 pb-12 ${bgColor}`}>
			<Fade>
				<div className='relative container mx-auto max-w-7xl p-0'>
					<div className='grid grid-cols-4 gap-4 lg:gap-6'>
						{/* Company Logo */}
						<div className='col-span-4 lg:col-span-2 order-1 lg:order-1 flex-col flex items-center md:items-start'>
							<div className='text-center lg:text-left'>
								<Image
									src='/images/hyfenlogo.svg'
									className='block'
									alt='BaseLogo'
									width={115}
									height={28}
									layout='fixed'
									quality={100}
								/>
								<span className='flex my-2 justify-start items-start gap-1 mt-1'>
									<p className='text-xs text-white/60 -mt-1'>powered by </p>
									<Indodax className='h-3 text-white' />
								</span>
							</div>
						</div>

						{/* Address */}
						<div className='col-span-4 lg:col-span-1 row-span-1 lg:row-span-3 order-3 lg:order-2 mb-8'>
							<div className='relative'>
								<h4 className='text-white-700 text-[20px] font-bold mb-5 text-center lg:text-left'>
									Address
								</h4>
								<p className='text-white px-4 lg:px-0 text-[14px] font-light leading-[18px] tracking-wide text-center lg:text-left'>
									Office 8, Lantai 18 Unit A, Jl Jend Sudirman Kav. 52-53 SCBD
									Lot. 28, Jakarta Selatan 12190
									<br />
									<br />
									Tel : +62 21 2922 2999
								</p>
							</div>
						</div>

						{/* Follow Us */}
						<div className='col-span-4 lg:col-span-1 row-span-1 lg:row-span-3 order-4 lg:order-3'>
							<p className='text-white-700 text-lg font-bold mb-9 text-center lg:text-left'>
								Follow Us
							</p>
							<div className='relative mx-12 lg:mx-auto'>
								<SocialMedia />
							</div>
						</div>

						{/* Links */}
						<div className='relative col-span-4 lg:col-span-2 order-2 lg:order-4 mb-8'>
							<div className='relative flex flex-wrap gap-x-2 gap-y-6  items-center justify-center px-4 lg:px-0 lg:justify-start lg:pr-20 w-full xl:w-4/5'>
								{listMenu.map((item) => (
									<Link legacyBehavior href={item.link} key={item.link}>
										<a
											className={[
												'relative h-2.5 w-fit flex justify-between items-center gap-3 last:gap-0 text-[14px] text-center tracking-wide first:pl-0 pr-2 last:border-none last:pr-0',
												item.link === '/terms-and-conditions'
													? 'lg:border-none'
													: 'border-r',
												item.link === '/community'
													? 'border-transparent lg:border-white/50'
													: 'border-r',
												router.pathname === item.link
													? 'text-white font-[700]'
													: 'text-white/50 font-[400]',
											].join(' ')}
										>
											{t(item.title)}
										</a>
									</Link>
								))}
							</div>
						</div>

						{/* Copyright */}
						<div className='col-span-4 lg:col-span-2 order-5 lg:order-5'>
							<div className='text-opacity-0.3 text-center lg:text-left text-xs font-medium'>
								<span className='block'>
									Copyright © 2022 Player One Guild Ltd
								</span>
								<span className='block'>All rights reserved</span>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</footer>
	)
}

export default Footer
