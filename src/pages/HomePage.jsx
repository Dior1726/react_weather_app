import React, { useEffect } from 'react'
import CardWrapper from '../components/Card/CardWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../features/weather/weatherSlice'
import Spinner from '../components/Spinner/Spinner'
import CityWeather from '../components/HomePage/CityWeather'

const HomePage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.weather.isLoading)

  useEffect(() => {
    dispatch(getWeatherData())
  }, [])

  return (
    <>
      <div className='flex items-stretch w-full gap-5'>
        <CardWrapper className='p-5 w-1/3 flex flex-col'>
          {isLoading ? <Spinner /> : <CityWeather />}
        </CardWrapper>

        <CardWrapper className='p-5 w-2/3 flex flex-col'>
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
