import { MainLayout } from '../components/Layouts/MainLayout'
import Head from 'next/head'
import GuildsModule from '../components/Guilds/GuildsModule'

export default function GuildPage() {
	return (
		<>
			<Head>
				<title>Earn Passive Income from Lending NFTs</title>
				<meta
					name='title'
					content='Earn Passive Income from Lending NFTs'
				/>
				<meta
					name='description'
					content='Hyfen Guild Tools Allow Anyone To Earn Money From Investing And Lending NFTs To Players'
				/>
				<meta
					property='og:title'
					content='Earn Passive Income from Lending NFTs'
				/>
				<meta
					property='og:description'
					content='Hyfen Guild Tools Allow Anyone To Earn Money From Investing And Lending NFTs To Players'
				/>
				<meta property="og:image" content="https://metabase.gg/images/Banner.png"/>
				<meta
					property='twitter:title'
					content='Earn Passive Income from Lending NFTs'
				/>
				<meta
					property='twitter:description'
					content='Hyfen Guild Tools Allow Anyone To Earn Money From Investing And Lending NFTs To Players'
				/>
				<meta property="twitter:image" content="https://metabase.gg/images/Banner.png"/>
			</Head>
			<div>
				<GuildsModule />
			</div>
		</>
	)
}

GuildPage.Layout = MainLayout
