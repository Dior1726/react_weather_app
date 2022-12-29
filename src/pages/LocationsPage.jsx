/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../store/actions'

import CardWrapper from '../components/Card/CardWrapper'
import Spinner from '../components/Spinner/Spinner'
import GridContainer from '../components/UI/GridContainer'
import Pagination from '../components/RickAndMortyPage/Pagination'
import { setCurrentPage } from '../store/slices/rickandmortySlice'

const LocationsPage = () => {
  const dispatch = useDispatch()
  const { locations, isLoading } = useSelector((state) => state.rickandmorty)

  useEffect(() => {
    dispatch(setCurrentPage(1))
    dispatch(getLocations())
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <GridContainer>
            {locations.map((location) => (
              <CardWrapper
                className='p-5'
                key={location.id}
              >
                {location.name}
              </CardWrapper>
            ))}
          </GridContainer>

          <Pagination type={'locations'} />
        </>
      )}
    </>
  )
}

export default LocationsPage
