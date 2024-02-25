import Footer from '../Common/Footer'
import Header from '../Common/Header'
import { useRouter } from 'next/router'

// Test deploy
// import Sidebar from 'components/common/Sidebar'

const MainLayout = ({ children }) => {
	const router = useRouter()
	return (
		<div
			className={`flex flex-col text-white min-h-screen ${
				router.pathname === '/players'
					? 'bg-hero-player '
					: router.pathname === '/guilds'
					? 'bg-guild'
					: 'bg-black-100'
			}`}
		>
			<header>
				<Header />

				{/* <Sidebar /> */}
			</header>
			<main className='grow'>{children}</main>
			<Footer bgColor={'bg-black-400'} />
		</div>
	)
}

export { MainLayout }
