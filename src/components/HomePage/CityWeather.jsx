import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../../store/actions'

const CityWeather = () => {
  const dispatch = useDispatch()
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [city, setCity] = useState([''])
  const { current } = useSelector((state) => state.weather)
  const { location } = useSelector((state) => state.weather)

  return (
    <>
      <div className='flex justify-end items-center'>
        <input
          type='text'
          placeholder='City name, click "Enter"'
          className={showSearchInput ? 'showInput' : 'defaultInput'}
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && city.length > 0) {
              if (city) dispatch(getWeatherData(city))
              else alert('Enter the city name!')
            }
          }}
        />
        <span
          onClick={() => setShowSearchInput((prevState) => !prevState)}
          className='flex justify-center items-center w-12 h-12 rounded-full bg-black bg-opacity-50'
        >
          {showSearchInput ? (
            <i className='bx bx-x text-2xl text-gray-400'></i>
          ) : (
            <i className='bx bx-search text-2xl text-gray-400'></i>
          )}
        </span>
      </div>

      <div className='border-b border-gray-600'>
        <div className='w-28 mb-3'>
          <img
            className='w-full h-auto'
            src={current.condition.icon}
            alt='Icon'
          />
        </div>
        <div className='text-6xl font-medium mb-2'>
          {current.temp_c.toFixed()} <span className='text-3xl'>°c</span>
        </div>
        <div className='text-gray-200 mb-3'>
          <span> {current.condition.text} </span>
          <span className='ml-10'>
            {current.is_day ? (
              <i className='bx bx-sun'></i>
            ) : (
              <i className='bx bx-moon'></i>
            )}
          </span>
        </div>
      </div>

      <div className=' text-xs'>
        <div className=' flex items-center gap-2 text-gray-300 mt-3'>
          <i className='bx bxs-map text-xl'></i>
          <span>
            {location.name}, {location.country}
          </span>
        </div>
        <div className=' flex items-center gap-2 text-gray-300'>
          <i className='bx bxs-calendar text-xl'></i>
          <span> {location.localtime} </span>
        </div>
      </div>
    </>
  )
}

export default CityWeather
