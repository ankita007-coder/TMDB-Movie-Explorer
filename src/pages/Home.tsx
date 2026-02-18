import HorizontalMovieSection from "../components/movie/HorizontalMovieSection";
import { Container } from "../components/reusable";
import { usePopularMovies } from "../hooks/usePopular";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useTrendingMovies } from "../hooks/useTrending";

const Home = () => {
  return (
    <Container>
      {/*Trending Movies Section*/}
      <HorizontalMovieSection
        sectionName="Trending"
        useMoviesHook={useTrendingMovies}
        onMovieClick={(movieId) => console.log("Clicked movie ID:", movieId)}
      />
      <HorizontalMovieSection
        sectionName="Top Rated"
        useMoviesHook={useTopRatedMovies}
        onMovieClick={(movieId) => console.log("Clicked movie ID:", movieId)}
      />
      <HorizontalMovieSection
        sectionName="Popular"
        useMoviesHook={usePopularMovies}
        onMovieClick={(movieId) => console.log("Clicked movie ID:", movieId)}
      />
    </Container>
  );
};

export default Home;
