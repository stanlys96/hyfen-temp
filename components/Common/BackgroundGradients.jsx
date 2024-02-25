import React from 'react'

const BackgroundGradients = ({ children }) => {
  return (
    <div className='relative'>
      <div className='bg-shape'></div>
      <div className='bg-guild pb-20'>
        {children}
      </div>
    </div>
  )
}

export default BackgroundGradients