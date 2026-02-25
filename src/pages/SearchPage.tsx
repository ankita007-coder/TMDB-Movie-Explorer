import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchMulti } from "../hooks/useSearchMulti";
import MovieCard from "../components/movie/MovieCard";
import PersonCard from "../components/movie/PersonCard";

const SearchPage = () => {
  const [input, setInput] = useState("");

  const debouncedQuery = useDebounce(input, 500);

  const { data, isLoading, error } = useSearchMulti(debouncedQuery);

  const results = data?.results || [];
  const movies = results.filter((item) => item?.media_type === "movie");
  const people = results.filter((item) => item?.media_type === "person");
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies or actors..."
        className="w-[75vw] p-4 mt-20 rounded-md bg-gray-900 border border-gray-700 text-white outline-none"
      />
      {isLoading && (
        <div className="mt-10 text-gray-100 animate-pulse">Searching....</div>
      )}
      {error && (
        <div className="mt-10 text-red-700">
          Error while searching movies...
        </div>
      )}
      {/* Movies Section */}
      {!isLoading && movies.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}

      {/* People Section */}
      {!isLoading && people.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">People</h2>

          <div className="flex gap-6 overflow-x-auto">
            {people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!isLoading &&
        debouncedQuery &&
        movies.length === 0 &&
        people.length === 0 && (
          <div className="mt-12 text-gray-400">No results found.</div>
        )}
    </div>
  );
};

export default SearchPage;
