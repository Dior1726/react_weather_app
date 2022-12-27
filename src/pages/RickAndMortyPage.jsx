import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { getCharacters } from '../store/actions'
import CardWrapper from '../components/Card/CardWrapper'
import RIckImg from '../assets/RickBlack.jpg'

const RickAndMortyPage = () => {
  const dispatch = useDispatch()
  const { charactersCount } = useSelector((state) => state.rickandmorty)

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      <CardWrapper className='p-5 mb-5 flex items-start gap-10'>
        <div className='w-60 h-60 rounded-[42px] overflow-hidden'>
          <img
            src={RIckImg}
            alt='Rick and Morty'
          />
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-5'>The Rick and Morty</h2>
          <div className='text-gray-300'>
            <div className='flex items-center mb-2'>
              <span className='min-w-[100px]'>Characters:</span>
              <span className='font-semibold text-[#cf112b] p-2 bg-[#191919]  rounded-lg'>
                {charactersCount}
              </span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='min-w-[100px]'>Locations:</span>
              <span className='font-semibold text-[#cf112b] p-2 bg-[#191919]  rounded-lg'>
                {charactersCount}
              </span>
            </div>
            <div className='flex items-center mb-2'>
              <span className='min-w-[100px]'>Episodes:</span>
              <span className='font-semibold text-[#cf112b] p-2 bg-[#191919]  rounded-lg'>
                {charactersCount}
              </span>
            </div>
          </div>
        </div>
        <div className='flex-1 flex items-end flex-col gap-5 uppercase text-[#cf112b] text-center font-semibold'>
          <NavLink
            to='/rickandmorty'
            className='min-w-[150px] py-2 bg-[#191919]  rounded-lg'
          >
            Characters
          </NavLink>
          <NavLink
            to='/rickandmorty/locations'
            className='min-w-[150px] py-2 bg-[#191919] rounded-lg'
          >
            Locations
          </NavLink>
          <NavLink
            to='/rickandmorty/episodes'
            className='min-w-[150px] py-2 bg-[#191919] rounded-lg'
          >
            Episodes
          </NavLink>
        </div>
      </CardWrapper>
      <Outlet />
    </div>
  )
}

export default RickAndMortyPage
