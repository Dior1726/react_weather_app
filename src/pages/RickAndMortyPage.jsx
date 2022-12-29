import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getCharacters, getLocations, getEpisodes } from '../store/actions'
import MainHeader from '../components/RickAndMortyPage/MainHeader'

const RickAndMortyPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
    dispatch(getLocations())
    dispatch(getEpisodes())
  }, [dispatch])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      <MainHeader />
      <Outlet />
    </div>
  )
}

export default RickAndMortyPage
