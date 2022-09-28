import React from 'react'
import styles from './Card.module.css'

const CardWrapper = ({children, className, gradient}) => {
  return (
    <div 
      className={`border border-gray-600 rounded-3xl ${className || ''} ${gradient || styles.gradient}`}
    >
      {children}
    </div>
  )
}

export default CardWrapper