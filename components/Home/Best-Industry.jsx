import React from 'react'
import Image from 'next/image'
// IVC_S-Logo_RGB_White 1.png
// Huobi_White_2.png
// Artboard–4.png
// Morningstar-White 1.png
// b.png
// Chimera 1.png
// Sea White.png
// enjin white 1.png
// yolo-investments-white 1.png
function BestIndustry() {
	return (
		<div className='container mx-auto py-3 mt-[60px]'>
			<h2 className='text-center py-8'>Backed by the Best in the Industry</h2>
			<div className='flex flex-wrap justify-between mt-[30px]'>
				<a className='item-industry' href='https://www.ivcrypto.io/'>
					<Image
						src='/images/IVC_S-Logo_RGB_White 1.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://www.huobi.com/en-us/capital/'>
					<Image
						src='/images/Huobi_White_2.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://standardalpha.com/'>
					<Image
						src='/images/Artboard–4.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://morningstar.ventures/'>
					<Image
						src='/images/Morningstar-White 1.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://accapital.io/'>
					<Image
						src='/images/b.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://www.hiveventures.io/'>
					<Image
						src='/images/Chimera 1.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href=''>
					<Image
						src='/images/Sea White.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://enjinstarter.com/'>
					<Image
						src='/images/enjin white 1.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
				<a className='item-industry' href='https://yolo.io/'>
					<Image
						src='/images/yolo-investments-white 1.png'
						alt='platform-player'
						layout='fixed'
						width='178'
						height='42'
					/>
				</a>
			</div>
		</div>
	)
}

export default BestIndustry
