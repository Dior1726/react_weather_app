import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../store/actions'
import { setCurrentPage } from '../../store/slices/rickandmortySlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const { pages, currentPage } = useSelector((state) => state.rickandmorty)
  const pagesCount = Array.from({ length: pages }, (v, i) => i + 1)
  console.log(pagesCount)

  const changePageHandler = (p) => {
    dispatch(getCharacters(p))
    dispatch(setCurrentPage(p))
  }

  return (
    <div className='flex items-center flex-wrap py-5 justify-center gap-3 text-[#cf112b] text-lg'>
      {pagesCount.map((page, n) => (
        <div
          className={`px-2 cursor-pointer font-medium py-1 select-none rounded-md ${
            currentPage === page ? 'bg-[#cf112b] text-white' : 'bg-[#191919]'
          }`}
          key={n}
          onClick={() => changePageHandler(page)}
        >
          {page}
        </div>
      ))}
    </div>
  )
}

export default Pagination
