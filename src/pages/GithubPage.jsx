import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner/Spinner'
import RepoList from '../components/GithubPage/RepoList'
import { getUserRepos } from '../store/actions'

const GithubPage = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.github)

  useEffect(() => {
    dispatch(getUserRepos())
  }, [])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      {isLoading ? <Spinner /> : <RepoList />}
    </div>
  )
}

export default GithubPage
