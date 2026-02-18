import { memo, useState } from "react";
import type { Movie } from "../../types/movie";
import { motion } from "framer-motion";
interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const imageBaseURL = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="min-w-[180px] sm:min-w-[200px] cursor-pointer bg-surface rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative aspect-[2/3] bg-surface">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-surfaceHover" />
        )}
        <img
          src={`${imageBaseURL}${movie.poster_path}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          alt={movie.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="p-3">
          <h3 className="text-sm font-medium truncate">{movie.title}</h3>
          <p className="text-textMuted text-xs">
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(MovieCard);
