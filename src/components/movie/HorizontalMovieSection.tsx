import { useTrendingMovies } from "../../hooks/useTrending";
import MovieCard from "./MovieCard";
import { ErrorState, HorizontalScroll, Section } from "../reusable";
import HorizontalSkeleton from "../reusable/HorizontalSkeleton";
import {motion} from "framer-motion"
interface HorizontalMovieSectionProps {
  sectionName?: string;
  useMoviesHook: () => ReturnType<typeof useTrendingMovies>;
}
export default function HorizontalMovieSection({
  sectionName,
  useMoviesHook,
}: HorizontalMovieSectionProps) {
  const { data, isLoading, error } = useMoviesHook();

  if (isLoading) return <HorizontalSkeleton />;
  if (error) return <ErrorState />;
  return (
    <motion.div className="mb-14"
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{amount:0.2}}
    >
      <Section title={sectionName}>
        <HorizontalScroll>
          {data?.results.map((movie: any) => (
            movie?.backdrop_path &&
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </HorizontalScroll>
      </Section>
    </motion.div>
  );
}
