import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialMedia() {
	const dataSosMed = [
		{
			id: 1,
			link: 'https://twitter.com/hyfen_gg',
			imageUrl: '/images/social/twitter.svg',
		},
		{
			id: 2,
			link: 'hhttps://www.facebook.com/hyfen.gg/',
			imageUrl: '/images/social/facebook.svg',
		},
		{
			id: 3,
			link: 'https://medium.com/@hyfen_gg',
			imageUrl: '/images/social/m.svg',
		},
		{
			id: 4,
			link: 'https://t.me/hyfen_gg',
			imageUrl: '/images/social/tiktok.svg',
		},
		{
			id: 5,
			link: 'https://t.me/hyfen_gg',
			imageUrl: '/images/social/tele.svg',
		},
		{
			id: 6,
			link: 'https://discord.gg/eVXcBUBqAh',
			imageUrl: '/images/social/discord.svg',
		},
		{
			id: 7,
			link: 'https://www.instagram.com/hyfen_gg/',
			imageUrl: '/images/social/instagram.svg',
		},
	]

	return (
		<div className='relative flex flex-wrap lg:gap-x-8 gap-y-6 justify-center lg:justify-start mb-5'>
			{dataSosMed.map((item) => (
				<Link legacyBehavior key={item.id} href={item.link} passHref>
					<a target='_blank' rel='noopener noreferrer'>
						<div className='relative flex flex-shrink-0 w-1/4 lg:w-[32px] h-[21px] cursor-pointer'>
							<Image src={item.imageUrl} alt='social media' layout='fill' />
						</div>
					</a>
				</Link>
			))}
		</div>
	)
}
