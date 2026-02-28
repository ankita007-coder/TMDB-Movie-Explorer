import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTrendingMovies } from "../../hooks/useTrending";
import { Skeleton } from "../reusable";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const HeroCarousel = () => {
  const { data, isLoading } = useTrendingMovies();
  const navigate = useNavigate();

  const movies = data?.results.slice(0, 3) || [];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!movies.length || isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length, isHovered]);

  const movie = movies[index];

  if (isLoading) {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      <Skeleton className="absolute inset-0 w-full h-full" />

      <div className="absolute bottom-28 left-16 space-y-4">
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-12 w-[200px]" />
        <Skeleton className="h-12 w-[200px]" />
      </div>
    </div>
  );
}

  if (!movie) return null;
  return (
    <>
      <div
        className="relative h-[85vh] w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={movie.id}
            src={`${IMAGE_BASE}${movie.backdrop_path}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0.5, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-28 left-16 max-w-xl z-10">
          <h1 className="text-5xl font-bold text-white mb-4">{movie.title}</h1>

          <p className="text-gray-200 line-clamp-3 mb-6">{movie.overview}</p>

          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-white/90 hover:bg-white text-black px-6 py-2 rounded-md font-medium transition"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
