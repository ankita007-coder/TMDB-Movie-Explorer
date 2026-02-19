import { useLocation, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { useMovieProviders } from "../hooks/useMovieProviders";
import { useSimilarMovies } from "../hooks/useSimilarMovies";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie } = useMovieDetails(id || "");
  const { data: movieCredits } = useMovieCredits(id || "");
  const { data: watchProviders } = useMovieProviders(id || "");
  const { data: similarMovies } = useSimilarMovies(id || "");

  console.log(movie)
  return (
    <div className="pt-16 bg-background text-white min-h-screen">
      {/* Backdrop Hero */}
      <section className="relative h-[85vh] w-full bg-gray-900">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 flex gap-10">
          {/* Poster Placeholder */}
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            className="w-[280px] h-[420px] bg-gray-800 rounded-lg"
          />

          {/* Details Placeholder */}
          <div className="flex-1 space-y-6 mt-5">
            <h1 className="text-4xl font-bold">{movie?.title}</h1>
            <p className="text-lg font-semibold">"{movie?.tagline}"</p>
            <p className="text-md p-1 text-gray-200">{movie?.vote_average} {movie?.runtime} {movie?.release_date.split('-')[2]} {movie?.genres.map(g => g.name).join(', ')}</p>
            <div className="h-6 w-1/2 bg-gray-800 rounded" />
            <p className="text-md text-gray-200">{movie?.overview}</p>
            
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="h-8 w-40 bg-gray-800 rounded mb-6" />
        <div className="h-4 w-full bg-gray-800 rounded mb-3" />
        <div className="h-4 w-full bg-gray-800 rounded mb-3" />
        <div className="h-4 w-2/3 bg-gray-800 rounded" />
      </section>

      {/* Cast Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="h-8 w-40 bg-gray-800 rounded mb-6" />
        <div className="flex gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-32 h-48 bg-gray-800 rounded-lg" />
          ))}
        </div>
      </section>

      {/* Watch Providers Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="h-8 w-60 bg-gray-800 rounded mb-6" />
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-gray-800 rounded-md" />
          ))}
        </div>
      </section>

      {/* Similar Movies Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="h-8 w-60 bg-gray-800 rounded mb-6" />
        <div className="flex gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-40 h-60 bg-gray-800 rounded-md" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsPage;
