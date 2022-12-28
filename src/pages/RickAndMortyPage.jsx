import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MainHeader from '../components/RickAndMortyPage/MainHeader'
import { getCharacters } from '../store/actions'


const RickAndMortyPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      <MainHeader/>
      <Outlet />
    </div>
  )
}

export default RickAndMortyPage
