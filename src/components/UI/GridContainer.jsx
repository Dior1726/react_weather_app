import React from 'react'

const GridContainer = ({ children, className }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-5 mb-5 ${className}`}>
      {children}
    </div>
  )
}

export default GridContainer
