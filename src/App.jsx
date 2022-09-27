import React from 'react';
import CardWrapper from './components/CardWrapper';
import LogoImg from './assets/weather.png'

const MenuLinks = [
  {
    id: 1,
    icon: 'bx bx-home',
    link: '/'
  },
  {
    id: 2,
    icon: 'bx bx-map-alt',
    link: '/'
  },
  {
    id: 3,
    icon: 'bx bx-calendar',
    link: '/'
  },
  {
    id: 4,
    icon: 'bx bx-cog',
    link: '/'
  }
]

function App() {
  return (
    <div className=' absolute top-0 left-0 right-0 bottom-0 p-5 bg-[#0e100f] text-white'>
      <CardWrapper className=' flex flex-col'>
        <div className='w-full p-5 flex items-center flex-col gap-2 border-b border-gray-600'>
          <img src={LogoImg} className='w-10 h-10' alt="" />
          <h3 className='text-gray-300 font-semibold'>Wearthry</h3>
        </div>
        <div className=' flex-grow p-5'>
          {MenuLinks.map((item) => (
            <div key={item.id} className='bg-white text-gray-400 bg-opacity-10 w-full py-3 flex items-center justify-center mb-3 rounded-xl hover:text-white hover:bg-opacity-20'>
              <i className={'text-2xl ' + item.icon}></i>
            </div>
          ))}
        </div>
      </CardWrapper>
    </div>
  );
}

export default App;
