import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='container'>
      <h4 className='heading-text'>Project Feature</h4>
      {children}
    </div>
  )
}

export default layout
