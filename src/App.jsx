import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TodoPage from './pages/TodoPage'
import GithubPage from './pages/GithubPage'
import RickAndMortyPage from './pages/RickAndMortyPage'

function App() {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 p-5 bg-main-black text-white flex gap-5'>
      <Sidebar />
      <main className='flex-grow min-h-0 flex flex-col overflow-y-auto'>
        <Routes>
          <Route
            exact
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/todo'
            element={<TodoPage />}
          />
          <Route
            path='/github'
            element={<GithubPage />}
          />
          <Route
            path='/rickandmorty'
            element={<RickAndMortyPage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
