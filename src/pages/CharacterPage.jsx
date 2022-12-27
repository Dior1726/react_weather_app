import Spinner from '../components/Spinner/Spinner'
import CharactersList from '../components/RickAndMortyPage/CharactersList'
import { useSelector } from 'react-redux'

const CharacterPage = () => {
  const { isLoading } = useSelector((state) => state.rickandmorty)

  return <>{isLoading ? <Spinner /> : <CharactersList />}</>
}

export default CharacterPage
