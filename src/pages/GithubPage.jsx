import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner/Spinner'
import RepoList from '../components/GithubPage/RepoList'
import { getUser, getUserRepos } from '../store/actions'
import CardWrapper from '../components/Card/CardWrapper'

const GithubPage = () => {
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((state) => state.github)

  useEffect(() => {
    dispatch(getUser())
    dispatch(getUserRepos())
  }, [])

  return (
    <div className='flex-grow min-h-0 flex flex-col container mx-auto'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {user && (
            <CardWrapper className='p-5 mb-5 flex gap-10'>
              <div className='w-60 h-60 rounded-[42px] overflow-hidden'>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                />
              </div>
              <div className='flex-1'>
                <h2 className='text-2xl font-semibold'>{user.name}</h2>
                <div>@{user.login}</div>

                <div className='mt-10'>Public repos: {user.public_repos}</div>
                <div>Created: {user.created_at.slice(0, 10)}</div>
              </div>
            </CardWrapper>
          )}
          <RepoList />
        </>
      )}
    </div>
  )
}

export default GithubPage
