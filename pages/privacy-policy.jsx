import { MainLayout } from '../components/Layouts/MainLayout'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import Head from 'next/head'

export default function PrivacyPolicyComponent() {
	return (
		<>
			<Head>
				<title>Hyfen | Make Money Playing Games</title>
				<meta name='title' content='Hyfen | Make Money Playing Games' />
				<meta
					name='description'
					content='Play Blockchain Games and Use Axie Infinity Guild Tools'
				/>
				<meta property='og:title' content='Hyfen | Make Money Playing Games' />
				<meta
					property='og:description'
					content='Play Blockchain Games and Use Axie Infinity Guild Tools'
				/>
				<meta
					property='og:image'
					content='https://metabase.gg/images/Banner.png'
				/>
				<meta
					property='twitter:title'
					content='Hyfen | Make Money Playing Games'
				/>
				<meta
					property='twitter:image'
					content='https://metabase.gg/images/Banner.png'
				/>
				<meta
					property='twitter:description'
					content='Play Blockchain Games and Use Axie Infinity Guild Tools'
				/>
			</Head>
			<div>
				<PrivacyPolicy />
			</div>
		</>
	)
}

PrivacyPolicyComponent.Layout = MainLayout
