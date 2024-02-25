import { MainLayout } from '../components/Layouts/MainLayout'
import React from 'react'
import Head from 'next/head'
import Player from '../components/Players/Player'

export default function PlayerComponent() {
	return (
		<>
			<Head>
				<title>Earn Money From Blockchain Games For Free</title>
				<meta name='title' content='Earn Money From Blockchain Games For Free' />
				<meta
					name='description'
					content='Borrow and Play NFTs From Play-to-Earn Gaming Guilds To Start Earning Money'
				/>
				<meta
					property='og:title'
					content='Earn Money From Blockchain Games For Free'
				/>
				<meta
					property='og:description'
					content='Borrow and Play NFTs From Play-to-Earn Gaming Guilds To Start Earning Money'
				/>
				<meta property="og:image" content="https://metabase.gg/images/Banner.png"/>
				<meta
					property='twitter:title'
					content='Earn Money From Blockchain Games For Free'
				/>
				<meta
					property='twitter:description'
					content='Borrow and Play NFTs From Play-to-Earn Gaming Guilds To Start Earning Money'
				/>
				<meta property="twitter:image" content="https://metabase.gg/images/Banner.png"/>
			</Head>
			<div>
				<Player />
			</div>
		</>
	)
}
PlayerComponent.Layout = MainLayout
