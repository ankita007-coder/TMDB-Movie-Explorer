import { useTrendingMovies } from '../hooks/useTrending'
import Loading from './Loading';

const Home = () => {

  const {data,isLoading,isError} = useTrendingMovies();
  if (isLoading) return <Loading/>
  if (isError) return <div>Error fetching trending movies.</div>
  return (
      <div>
      {data?.results.slice(0, 5).map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  )
}

export default Home
