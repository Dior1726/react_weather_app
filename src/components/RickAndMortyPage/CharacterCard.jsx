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
        <div className='flex items-center gap-1'>
          <i className='bx bx-planet text-lg'></i>
          {character.origin.name}
        </div>
        <div className='flex items-center gap-2'>
          <div>{character.species}</div>
          <div>/</div>
          <div className='flex items-center gap-1'>
            <span
              className={`w-3 h-3 block rounded-full 
                ${character.status === 'Alive' && 'bg-green-500'} 
                ${character.status === 'Dead' && 'bg-red-500'}
                ${character.status === 'unknown' && 'bg-gray-300'}
              `}
            />
            {character.status}
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default CharacterCard
