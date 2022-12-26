import React from 'react'
import CardWrapper from '../Card/CardWrapper'

const RepoCard = ({ repo }) => {
  return (
    <CardWrapper className='p-5'>
      <div className='flex justify-between mb-4'>
        <div className='capitalize text-lg'>{repo.name}</div>
        <div>{repo.language}</div>
      </div>
      <div className='flex items-center justify-between text-sm'>
        <span className=' text-gray-400'>{repo.created_at}</span>
        <a
          href={repo.html_url}
          target='_blank'
          rel='noreferrer'
          className='bg-gray-800 hover:shadow hover:shadow-gray-700 py-2 px-4 rounded-lg'
        >
          Open
        </a>
      </div>
    </CardWrapper>
  )
}

export default RepoCard
