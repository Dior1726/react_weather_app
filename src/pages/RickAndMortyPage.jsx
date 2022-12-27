import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../store/actions'
import Spinner from '../components/Spinner/Spinner'
import CharactersList from '../components/RickAndMortyPage/CharactersList'
import CardWrapper from '../components/Card/CardWrapper'
import RIckImg from '../assets/RickBlack.jpg'

const RickAndMortyPage = () => {
  const dispatch = useDispatch()
  const { isLoading, charactersCount } = useSelector(
    (state) => state.rickandmorty
  )

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      <CardWrapper className='p-5 mb-10 flex items-center gap-10'>
        <div className='w-60 h-60 rounded-[42px] overflow-hidden'>
          <img
            src={RIckImg}
            alt='Rick and Morty'
          />
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-5'>The Rick and Morty</h2>
          <div className='text-gray-300'>Characters: {charactersCount}</div>
        </div>
      </CardWrapper>
      {isLoading ? <Spinner /> : <CharactersList />}
    </div>
  )
}

export default RickAndMortyPage
