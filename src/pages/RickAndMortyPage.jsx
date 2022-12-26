import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../store/actions'
import Spinner from '../components/Spinner/Spinner'
import CharactersList from '../components/RickAndMortyPage/CharactersList'

const RickAndMortyPage = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.rickandmorty)

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      {isLoading ? <Spinner /> : <CharactersList />}
    </div>
  )
}

export default RickAndMortyPage
