import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import CalendarPage from './pages/CalendarPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 p-5 bg-main-black text-white flex gap-5'>
      <Sidebar />
      <main className='flex-grow'>
        <Routes>
          <Route
            exact
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/map'
            element={<MapPage />}
          />
          <Route
            path='/calendar'
            element={<CalendarPage />}
          />
          <Route
            path='/settings'
            element={<SettingsPage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
