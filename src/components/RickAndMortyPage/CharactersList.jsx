import React from 'react'
import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'

const CharactersList = () => {
  const { characters } = useSelector((state) => state.rickandmorty)

  return (
    <div className='grid grid-cols-2 gap-5 pb-5'>
      {characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            character={character}
          />
        )
      })}
    </div>
  )
}

export default CharactersList
