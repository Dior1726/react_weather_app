import React from 'react'
import styles from './Card.module.css'

const CardWrapper = ({children, width, className}) => {
  return (
    <div 
      className={`text-center border  border-gray-600 max-w-max rounded-3xl h-full ${width || ''} ${className || ''} ${styles.gradient}`}
    >
      {children}
    </div>
  )
}

export default CardWrapper