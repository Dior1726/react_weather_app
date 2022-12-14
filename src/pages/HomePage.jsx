import React, { useEffect } from 'react'
import CardWrapper from '../components/Card/CardWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../store/actions'
import Spinner from '../components/Spinner/Spinner'
import CityWeather from '../components/HomePage/CityWeather'

const HomePage = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.weather)

  useEffect(() => {
    dispatch(getWeatherData())
  }, [])

  return (
    <>
      <div className='flex items-stretch flex-wrap md:flex-nowrap w-full gap-5'>
        <CardWrapper className='w-full md:w-1/3 p-5 flex flex-col'>
          {isLoading ? <Spinner /> : <CityWeather />}
        </CardWrapper>

        <CardWrapper className='w-full md:w-2/3 p-5 flex flex-col'>
          <div className='mb-2'>Todays Highlight</div>

          <div className='flex gap-3 w-full flex-grow'>
            <CardWrapper
              className='p-3 flex-grow'
              gradient='dark-green-gradient'
            >
              <div className='text-gray-300 mb-2'>Card Title</div>
            </CardWrapper>
            <CardWrapper
              className='p-3 flex-grow'
              gradient='dark-green-gradient'
            >
              <div className='text-gray-300 mb-2'>Card Title</div>
            </CardWrapper>
          </div>
        </CardWrapper>
      </div>
    </>
  )
}

export default HomePage
