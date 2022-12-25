import React from 'react'
import CardWrapper from '../Card/CardWrapper'

const RepoCard = ({ repo }) => {
  return <CardWrapper className='p-5'>{repo.name}</CardWrapper>
}

export default RepoCard
