import { Fade } from 'react-reveal'
import {
	DescHeading,
	Heading1,
	ImageJumbotron,
	ScrollDownAnimate,
} from '../atoms'
import SectionDownloadApp from './SectionDownloadApp'

export default function Jumbotron({ heading, desc, image, children = null }) {
	// looping when heading more than one
	const headingText = heading?.map((item) => {
		return <Heading1 key={item} text={item} />
	})

	return (
		<div className='relative container mx-auto max-w-7xl pt-28 md:pt-20'>
			{/* Container Content */}
			<div className='relative grid place-items-center grid-cols-1 gap-4 lg:grid-cols-2'>
				{/* Heading, Description, and Button Download */}
				<div className='relative grid place-items-center justify-items-center md:place-items-start'>
					{children ? (
						children
					) : (
						<>
							{/* Container Heading and Desc */}

							{/* Heading */}
							<Fade top>{headingText}</Fade>

							{/* Desription */}
							<Fade top>
								<DescHeading text={desc} />
							</Fade>
						</>
					)}
					{/* Button Download */}
					<Fade top delay={200}>
						<SectionDownloadApp />
					</Fade>

					{/*Animation Scroll when dekstop*/}
					<div className='hidden relative md:block mt-10'>
						<ScrollDownAnimate />
					</div>
				</div>

				{/* Image Content */}
				<Fade right delay={100}>
					{/* Image */}
					<ImageJumbotron src={image} />

					{/*Animation Scroll when mobile*/}
					<div className='relative block mt-4 md:hidden'>
						<ScrollDownAnimate />
					</div>
				</Fade>
			</div>
		</div>
	)
}
