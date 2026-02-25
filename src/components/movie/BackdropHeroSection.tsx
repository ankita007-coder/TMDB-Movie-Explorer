import { GoDotFill } from "react-icons/go";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import type { CrewMember } from "../../types/movie";
import { FaStar } from "react-icons/fa";

interface BackdropHeroSectionProps {
  id: string;
  crew: CrewMember[];
}
const BackdropHeroSection = ({ id, crew }: BackdropHeroSectionProps) => {
  const { data: movie } = useMovieDetails(id || "");
  const director = crew?.find(
    (member: CrewMember) => member.job === "Director",
  );
  return (
    <>
      <section className="relative h-[95vh] w-full bg-gray-900">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-12 py-10 flex gap-10">
          {/* Poster Placeholder */}
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            className="w-[280px] h-[420px] bg-gray-800 rounded-lg"
          />

          {/* Details Placeholder */}
          <div className="flex-1 space-y-6 mt-5">
            <h1 className="text-4xl font-bold">{movie?.title}</h1>
            <p className="text-lg font-semibold">"{movie?.tagline}"</p>
            <p className="text-md p-1 text-gray-200 flex items-center gap-4">
              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />{" "}
                {movie?.vote_average.toFixed(1)}{" "}
              </span>
              <span>{movie?.runtime} min</span>
            </p>
            <p>
              <span className="flex gap-3">
                {" "}
                {movie?.genres.map((g) => (
                  <span key={g.id} className="flex items-center gap-1">
                    <GoDotFill className="text-gray-400 text-sm" />{" "}
                    {g.name}{" "}
                  </span>
                ))}
              </span>
            </p>
            {director && (
              <div className="text-gray-200 text-sm mb-6">
                Directed by {director.name}
              </div>
            )}
            <p className="text-md text-gray-200 w-2/3 line-clamp-3">
              {movie?.overview}
            </p>
            <button className="bg-red-600 hover:bg-red-700 transition rounded-md font-medium flex justify-center items-center px-6 py-2">
              + Add to Watchlist
            </button>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          {movie?.overview}
        </p>
      </section>
    </>
  );
};

export default BackdropHeroSection;
