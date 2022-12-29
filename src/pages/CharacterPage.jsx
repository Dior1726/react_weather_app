/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../store/actions'

import Spinner from '../components/Spinner/Spinner'
import GridContainer from '../components/UI/GridContainer'
import Pagination from '../components/RickAndMortyPage/Pagination'
import CardWrapper from '../components/Card/CardWrapper'

const CharacterPage = () => {
  const dispatch = useDispatch()
  const { isLoading, characters } = useSelector((state) => state.rickandmorty)

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <GridContainer>
            {characters.map((character) => {
              return (
                <CardWrapper
                  key={character.id}
                  className='p-5 flex items-start gap-5'
                >
                  <div className='w-24 h-24 rounded-[18px] overflow-hidden'>
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
            })}
          </GridContainer>
          <Pagination type={'characters'} />
        </>
      )}
    </>
  )
}

export default CharacterPage
