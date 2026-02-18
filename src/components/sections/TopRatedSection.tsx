import { useTopRatedMovies } from "../../hooks/useTopRatedMovies";
import MovieCard from "../movie/MovieCard";
import { ErrorState, HorizontalScroll, Section } from "../reusable";
import HorizontalSkeleton from "../reusable/HorizontalSkeleton";

interface TopRatedSectionProps{
    onMovieClick:(movieId:string)=>void;
}
export default function TopRatedSection({onMovieClick}:TopRatedSectionProps) {
  const { data, isLoading, error } = useTopRatedMovies();

  if (isLoading) return <HorizontalSkeleton />;
  if (error) return <ErrorState />;
  return (
    <div>
      <Section title="Top Rated">
        <HorizontalScroll>
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={()=>onMovieClick(movie.id.toString())}/>
          ))}
        </HorizontalScroll>
      </Section>
    </div>
  );
}
