import HeroCarousel from "../components/layout/HeroCarousel";
import HorizontalMovieSection from "../components/movie/HorizontalMovieSection";
import TrendingMovieSection from "../components/movie/TrendingMovieSection";
import { Container } from "../components/reusable";
import { usePopularMovies } from "../hooks/usePopular";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useTrendingMovies } from "../hooks/useTrending";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <div className="-my-20 mb-10">
        <TrendingMovieSection
          useMoviesHook={useTrendingMovies}
        />
        </div>
      <Container>
        {/*Trending Movies Section*/}
        
        <HorizontalMovieSection
          sectionName="Top Rated"
          useMoviesHook={useTopRatedMovies}
        />
        <HorizontalMovieSection
          sectionName="Popular"
          useMoviesHook={usePopularMovies}
        />
      </Container>
    </>
  );
};

export default Home;
