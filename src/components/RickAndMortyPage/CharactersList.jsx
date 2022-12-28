import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'
import Pagination from './Pagination'

const CharactersList = () => {
  const { characters } = useSelector((state) => state.rickandmorty)
  return (
    <>
      <div className='grid md:grid-cols-2 gap-5 mb-5'>
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
            />
          )
        })}
      </div>

      <Pagination />
    </>
  )
}

export default CharactersList
