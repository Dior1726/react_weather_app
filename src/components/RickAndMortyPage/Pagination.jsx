import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, getEpisodes, getLocations } from '../../store/actions'
import { setCurrentPage } from '../../store/slices/rickandmortySlice'

const Pagination = (props) => {
  const dispatch = useDispatch()
  const { pages, currentPage } = useSelector((state) => state.rickandmorty)
  const pagesCount = Array.from({ length: pages }, (v, i) => i + 1)

  const changePageHandler = (p) => {
    if (props.type === 'characters') {
      dispatch(getCharacters(p))
      dispatch(setCurrentPage(p))
    }
    if (props.type === 'locations') {
      dispatch(getLocations(p))
      dispatch(setCurrentPage(p))
    }
    if (props.type === 'episodes') {
      dispatch(getEpisodes(p))
      dispatch(setCurrentPage(p))
    }
  }

  return (
    <div className='flex items-center flex-wrap py-5 justify-center gap-3 text-[#cf112b] text-lg'>
      {currentPage > pages + 2 && (
        <>
          <div
            className='px-2 cursor-pointer font-medium py-1 select-none rounded-md bg-[#191919]'
            onClick={() => changePageHandler(1)}
          >
            1
          </div>
          <div>.</div>
        </>
      )}
      {pagesCount.map((page, n) => (
        <div
          className={`px-2 cursor-pointer font-medium py-1 select-none rounded-md 
            ${currentPage === page ? 'bg-[#cf112b] text-white' : 'bg-[#191919]'}
            ${
              currentPage + 1 === page ||
              currentPage - 1 === page ||
              currentPage === page
                ? 'block'
                : 'hidden'
            }
          `}
          key={n}
          onClick={() => changePageHandler(page)}
        >
          {page}
        </div>
      ))}
      {currentPage < pages - 2 && (
        <>
          <div>.</div>
          <div
            className='px-2 cursor-pointer font-medium py-1 select-none rounded-md bg-[#191919]'
            onClick={() => changePageHandler(pages)}
          >
            {pages}
          </div>
        </>
      )}
    </div>
  )
}

export default Pagination
