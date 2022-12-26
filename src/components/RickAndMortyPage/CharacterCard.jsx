import React from 'react'
import CardWrapper from '../Card/CardWrapper'

const CharacterCard = ({ character }) => {
  return (
    <CardWrapper className='p-5 flex items-start gap-5'>
      <div className='w-32 h-32 rounded-[22px] overflow-hidden'>
        <img
          className='w-full h-auto'
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className='text-sm text-gray-400'>
        <h3 className='text-lg font-semibold mb-4 text-white'>
          {character.name}
        </h3>
        <div>{character.origin.name}</div>
        <div>
          {character.species} / {character.gender} / ({character.status})
        </div>
      </div>
    </CardWrapper>
  )
}

export default CharacterCard
