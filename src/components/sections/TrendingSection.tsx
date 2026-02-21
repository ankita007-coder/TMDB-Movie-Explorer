import { useTrendingMovies } from "../../hooks/useTrending";
import MovieCard from "../movie/MovieCard";
import { ErrorState, HorizontalScroll, Section } from "../reusable";
import HorizontalSkeleton from "../reusable/HorizontalSkeleton";

export default function TrendingSection() {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) return <HorizontalSkeleton />;
  if (error) return <ErrorState />;
  return (
    <div>
      <Section title="Trending">
        <HorizontalScroll>
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </HorizontalScroll>
      </Section>
    </div>
  );
}
