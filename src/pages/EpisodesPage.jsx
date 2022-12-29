/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEpisodes } from '../store/actions'

import CardWrapper from '../components/Card/CardWrapper'
import Spinner from '../components/Spinner/Spinner'
import GridContainer from '../components/UI/GridContainer'
import Pagination from '../components/RickAndMortyPage/Pagination'

const EpisodesPage = () => {
  const dispatch = useDispatch()
  const { episodes, isLoading } = useSelector((state) => state.rickandmorty)

  useEffect(() => {
    dispatch(getEpisodes())
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <GridContainer>
            {episodes.map((episode) => (
              <CardWrapper
                className='p-5'
                key={episode.id}
              >
                {episode.name}
              </CardWrapper>
            ))}
          </GridContainer>
          <Pagination type={'episodes'} />
        </>
      )}
    </>
  )
}

export default EpisodesPage
