import { useTrendingMovies } from "../../hooks/useTrending";
import MovieCard from "./MovieCard";
import { ErrorState, HorizontalScroll, Section } from "../reusable";
import HorizontalSkeleton from "../reusable/HorizontalSkeleton";

interface HorizontalMovieSectionProps {
  sectionName: string;
  useMoviesHook: () => ReturnType<typeof useTrendingMovies>;
  onMovieClick: (movieId: string) => void;
}
export default function HorizontalMovieSection({
  sectionName,
  useMoviesHook,
  onMovieClick,
}: HorizontalMovieSectionProps) {
  const { data, isLoading, error } = useMoviesHook();

  if (isLoading) return <HorizontalSkeleton />;
  if (error) return <ErrorState />;
  return (
    <div>
      <Section title={sectionName}>
        <HorizontalScroll>
          {data?.results.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => onMovieClick(movie.id.toString())}
            />
          ))}
        </HorizontalScroll>
      </Section>
    </div>
  );
}
