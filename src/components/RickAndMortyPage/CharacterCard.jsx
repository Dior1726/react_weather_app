import React from 'react'
import CardWrapper from '../Card/CardWrapper'

const CharacterCard = ({ character }) => {
  return <CardWrapper className='p-5'>{character.name}</CardWrapper>
}

export default CharacterCard
