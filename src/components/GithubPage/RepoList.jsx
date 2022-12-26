import React from 'react'
import { useSelector } from 'react-redux'
import RepoCard from './RepoCard'

const RepoList = () => {
  const { repos, error } = useSelector((state) => state.github)

  return (
    <>
      {error && (
        <h1 className='text-center text-2xl mt-10 text-gray-400'>{error}</h1>
      )}

      <div className='grid grid-cols-2 gap-5'>
        {repos.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              repo={repo}
            />
          )
        })}
      </div>
    </>
  )
}

export default RepoList
