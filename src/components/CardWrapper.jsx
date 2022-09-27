import React from 'react'

const CardWrapper = ({children, width, className}) => {
  return (
    <div className={`text-center ${width} ${className}`} >
      {children}
    </div>
  )
}

export default CardWrapper