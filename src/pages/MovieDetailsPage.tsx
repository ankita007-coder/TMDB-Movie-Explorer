import { useParams } from "react-router-dom";
import { useMovieCredits } from "../hooks/useMovieCredits";
import CastSection from "../components/movie/CastSection";
import { useMovieProviders } from "../hooks/useMovieProviders";
import BackdropHeroSection from "../components/movie/BackdropHeroSection";
import { useSimilarMovies } from "../hooks/useSimilarMovies";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie/MovieCard";
import { useEffect } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movieCredits } = useMovieCredits(id || "");
  const { data: watchProviders } = useMovieProviders(id || "");
  const { data: similarMovies } = useSimilarMovies(id || "");

  const indiaProviders = watchProviders?.results?.IN;
  const flatrate = indiaProviders?.flatrate ?? [];
  const rent = indiaProviders?.rent ?? [];
  const buy = indiaProviders?.buy ?? [];
  const similarMoviesData = similarMovies?.results || [];


  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[id])


  return (
    <div className="pt-12 bg-background text-white min-h-screen">
      {/* Backdrop Hero */}
      <BackdropHeroSection id={id || ""} crew={movieCredits?.crew || []} />

      {/* Cast Section */}

      <CastSection cast={movieCredits?.cast || []} />

      {/* Watch Providers Section */}
      {indiaProviders ? (
        <section className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-semibold mb-8">
            Where to Watch in India
          </h2>

          {flatrate.length > 0 && (
            <>
              <h3 className="text-lg mb-4 text-gray-300">Stream</h3>
              <div className="flex gap-4 mb-8">
                {flatrate.map((provider) => (
                  <img
                    key={provider.provider_id}
                    src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-14 h-14 rounded-md"
                  />
                ))}
              </div>
            </>
          )}

          {rent.length > 0 && (
            <>
              <h3 className="text-lg mb-4 text-gray-300">Rent</h3>
              <div className="flex gap-4 mb-8">
                {rent.map((provider) => (
                  <img
                    key={provider.provider_id}
                    src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-14 h-14 rounded-md"
                  />
                ))}
              </div>
            </>
          )}

          {buy.length > 0 && (
            <>
              <h3 className="text-lg mb-4 text-gray-300">Buy</h3>
              <div className="flex gap-4">
                {buy.map((provider) => (
                  <img
                    key={provider.provider_id}
                    src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-14 h-14 rounded-md"
                  />
                ))}
              </div>
            </>
          )}
        </section>
      ) : (
        <p className="max-w-7xl mx-auto px-6 py-8 font-bold text-2xl">
          Watch Providers Unavailable in India
        </p>
      )}

      {/* Similar Movies Section */}
      {similarMoviesData && similarMoviesData?.length>0 && (
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>

          <div className="flex gap-6 overflow-x-auto py-12">
            {similarMoviesData?.slice(0, 10).map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} poster={true}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieDetailsPage;
