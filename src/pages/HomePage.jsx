import React, { useEffect, useState } from 'react'
import CardWrapper from '../components/Card/CardWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../features/counter/weatherSlice'
import Spinner from '../components/Spinner/Spinner'

const showClass = 'border border-gray-600 bg-transparent outline-none px-2 text-base transform translate-x-0 opacity-100 visible'
const hideClass = 'border border-gray-600 bg-transparent outline-none px-2 text-base opacity-0 transform translate-x-5 invisible'

const HomePage = () => {
  const dispatch = useDispatch()
  const [showSearchInput, setShowSearchInput] = useState(false)

  useEffect(() => {
    dispatch(getWeatherData())
  }, [])

  
  const isLoading = useSelector(state => state.weather.isLoading)
  const current = useSelector(state => state.weather.current)
  const location = useSelector(state => state.weather.location)

  return (
    <>
      <div className='flex items-stretch w-full gap-5'>
        <CardWrapper className='p-5 w-1/3 flex flex-col'>
          { 
            isLoading 
            ? 
              <Spinner/>
            :
              <>
                <div className='flex justify-end'>
                  <input 
                    type="text" 
                    className={showSearchInput ? showClass : hideClass} 
                  />
                  <span
                    onClick={() => setShowSearchInput((prevState) => !prevState)}
                    className='flex justify-center items-center w-12 h-12 rounded-full bg-black bg-opacity-50'>
                    <i className='bx bx-search text-2xl text-gray-400'></i>
                  </span>
                </div>

                <div className='border-b border-gray-600'>
                  <div className='w-28 mb-3'>
                    <img className='w-full h-auto' src={current.condition.icon} alt="" />
                  </div>
                  <div className='text-6xl font-medium mb-2'>
                    {current.temp_c.toFixed()} <span className='text-3xl'>°c</span>
                  </div>
                  <div className='text-gray-200 mb-3'>
                    <span> {current.condition.text} </span>
                    <span className='ml-10'>
                      {
                        current.is_day
                        ? <i className='bx bx-sun' ></i>
                        : <i className='bx bx-moon' ></i>
                      }
                    </span>
                  </div>
                </div>

                <div className=' text-xs'>
                  <div className=' flex items-center gap-2 text-gray-300 mt-3'>
                    <i className='bx bxs-map text-xl' ></i>
                    <span> {location.name}, {location.country}</span>
                  </div>
                  <div className=' flex items-center gap-2 text-gray-300'>
                    <i className='bx bxs-calendar text-xl' ></i>
                    <span> {location.localtime} </span>
                  </div>
                </div>
              </>
          }
        </CardWrapper>

        <CardWrapper className='p-5 w-2/3 flex flex-col'>
          <div className='mb-2'>
            Todays Highlight
          </div>

          <div className='flex gap-3 w-full flex-grow'>
            <CardWrapper className='p-3 flex-grow' gradient='dark-green-gradient'>
              <div className='text-gray-300 mb-2'>
                Card Title
              </div>
            </CardWrapper>
            <CardWrapper className='p-3 flex-grow' gradient='dark-green-gradient'>
              <div className='text-gray-300 mb-2'>
                Card Title
              </div>
            </CardWrapper>
          </div>
        </CardWrapper>
      </div> 
    </>
  )
}

export default HomePage