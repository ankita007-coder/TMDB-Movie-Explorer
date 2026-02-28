import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovieDetails } from "../../api/movieService";
import type { Movie } from "../../types/movie";
import { FaHeart } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";
import { FiHeart } from "react-icons/fi";
import { useWatchList } from "../../context/WatchlistContext";

interface MovieCardProps {
  movie: Movie;
  poster?: boolean;
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, poster }: MovieCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { inWatchList, addToWatchList, removeFromWatchList } = useWatchList();
  const isInWishList = inWatchList(movie.id);
  // Prefetch on hover
  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: ["movieDetails", movie.id],
      queryFn: () => getMovieDetails(String(movie.id)),
    });
  };

  // Read cached details only (no auto fetch)
  const { data: details } = useQuery({
    queryKey: ["movieDetails", movie.id],
    queryFn: () => getMovieDetails(String(movie.id)),
    enabled: false,
  });

  return (
    <motion.div
      className={`relative group shrink-0 min-w-[170px] lg:min-w-[210px] rounded-md overflow-hidden cursor-pointer shadow-md ${poster ? "aspect-[2/3] w-2" : "aspect-[16/9]"}`}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={handleMouseEnter}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      {/* Poster */}
      <img
        src={`${IMAGE_BASE}${poster ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        className="z-30 text-2xl absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-md transition transform hover:scale-110 active:scale-95"
        onClick={(e) => {
          // stop the click from bubbling up to the parent card
          e.stopPropagation();
          e.preventDefault();
          if (!isAuthenticated) {
            loginWithRedirect();
            return;
          }

          isInWishList ? removeFromWatchList(movie.id) : addToWatchList(movie);
        }}
      >
        {isInWishList ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FiHeart className="text-red-500" />
        )}
      </button>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white line-clamp-2">
          {movie.title}
        </h3>

        {details && (
          <p className="text-sm text-gray-300 mt-1">
            {details.runtime} min <br />
            {details.genres.slice(0, 2).map((g) => (
              <span key={g.id}>• {g.name} </span>
            ))}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MovieCard;
