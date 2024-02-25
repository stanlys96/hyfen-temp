import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

const FullLayout = ({ children, title }) => {
  return (
    <div className='flex flex-col md:h-screen bg-black-gradient-3 text-white justify-center'>
      <header>
				<Header fixed={false} />
			</header>
      <div className="container mx-auto">
        <h1 className="text-[32px] font-bold mb-2">{title}</h1>
      </div>
      <div className='h-[500px] max-w-[1160px] px-3 mx-auto md:h-auto flex-grow mb-10 lg:mb-[40px] lg:overflow-y-auto'>
        <div className=" max-h-full w-full lg:mx-auto p-4 text-xs font-medium border border-white bg-black-100 overflow-y-auto  scrollbar-style">
          {children}
        </div>
      </div>
      <Footer
				bgColor="bg-transparent"
			/>
    </div>
  )
}

export default FullLayout
