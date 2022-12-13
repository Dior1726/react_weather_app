import React from 'react'
import CardWrapper from '../Card/CardWrapper'
import LogoImg from '../../assets/plan.png'
import { NavLink } from 'react-router-dom'

const userImg =
  'https://media.istockphoto.com/vectors/head-of-bearded-man-in-profile-vector-id1262277544?k=20&m=1262277544&s=612x612&w=0&h=ox0ygKKnM45lOfqJXcrAGgwWbMuxEAySR7QAUXRkWC8='

const MenuLinks = [
  {
    id: 1,
    icon: 'bx bx-cloud',
    link: '/',
  },
  {
    id: 2,
    icon: 'bx bx-list-check',
    link: '/todo',
  },
  {
    id: 3,
    icon: 'bx bx-calendar',
    link: '/calendar',
  },
  {
    id: 4,
    icon: 'bx bx-cog',
    link: '/settings',
  },
]

const activeClass =
  'bg-white w-full py-3 flex items-center justify-center mb-4 rounded-xl text-white bg-opacity-20'

const defaultClass =
  'bg-white text-gray-400 bg-opacity-10 w-full py-3 flex items-center justify-center mb-4 rounded-xl hover:text-white hover:bg-opacity-20'

const Sidebar = () => {
  return (
    <CardWrapper className='flex flex-col'>
      <div className='w-full p-5 flex items-center flex-col gap-2 border-b border-gray-600'>
        <img
          src={LogoImg}
          className='w-10 h-10'
          alt=''
        />
        <h3 className='text-gray-300 font-semibold'>Planner</h3>
      </div>

      <div className=' flex-grow p-5 flex flex-col justify-between'>
        <div>
          {MenuLinks.map((item) => (
            <NavLink
              end
              to={item.link}
              key={item.id}
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              <i className={'text-2xl ' + item.icon}></i>
            </NavLink>
          ))}
        </div>

        <div className='flex flex-col items-center gap-5'>
          <div className='w-12 h-12 bg-[#0e100f] flex items-center justify-center rounded-full relative'>
            <i className='bx bx-bell text-2xl text-gray-200'></i>
            <span className='absolute w-2 h-2 bg-red-600 rounded-full right-3 top-2'></span>
          </div>
          <div className='w-14 h-14 shadow-md rounded-full shadow-red-400'>
            <img
              className='w-full h-auto rounded-full'
              src={userImg}
              alt=''
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default Sidebar
