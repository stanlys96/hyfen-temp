import EasiestWay from './EasiestWay'
import ExploreGames from './ExploreGames'
import JoinCommunity from './JoinCommunity'
import OurProducts from './OurProducts'
import Jumbotron from './sections/Jumbotron'

export default function Home() {
	return (
		<div className='relative box-border bg-app-bg_app overflow-hidden'>
			<section className='relative bg-gradient-to-b from-app-bg_primary to-app-bg_secondary'>
				<Jumbotron />
			</section>
			<section className='bg-easiest-way py-8 md:py-0'>
				<EasiestWay />
			</section>
			<section className='bg-white/5'>
				<ExploreGames />
			</section>
			<section className='relative'>
				<OurProducts />
			</section>
			<section className='relative'>
				<JoinCommunity />
			</section>
		</div>
	)
}
