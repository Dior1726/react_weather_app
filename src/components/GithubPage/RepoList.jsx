import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserRepos } from '../../store/actions'
import { setCurrentPage } from '../../store/slices/githubSlice'
import RepoCard from './RepoCard'

const RepoList = () => {
  const dispatch = useDispatch()
  const { repos, currentPage, perPage, totalCount } = useSelector(
    (state) => state.github
  )
  const pages = [1, 2, 3, 4]

  const changePageHandler = (page) => {
    dispatch(getUserRepos({ currentPage: page, perPage }))
    dispatch(setCurrentPage(page))
  }

  return (
    <>
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

      <div className='flex items-center justify-center gap-4 flex-wrap mt-10'>
        {pages.map((page, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-white rounded cursor-pointer ${
              page === currentPage ? 'bg-gray-700' : 'bg-gray-500'
            }`}
            onClick={() => changePageHandler(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </>
  )
}

export default RepoList
