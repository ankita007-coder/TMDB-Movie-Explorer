import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchMulti } from "../hooks/useSearchMulti";
import MovieCard from "../components/movie/MovieCard";
import PersonCard from "../components/movie/PersonCard";
import type {
  SearchMovie,
  SearchPerson,
  SearchResult,
} from "../types/movie";
import PersonModal from "../components/movie/PersonModal";

const SearchPage = () => {
  const [input, setInput] = useState("");

  const debouncedQuery = useDebounce(input, 500);

  const { data, isLoading, error } = useSearchMulti(debouncedQuery);

  const [selectedPerson, setSelectedPerson] = useState<SearchPerson | null>(
    null,
  );

  const [isOpen,setIsOpen] = useState<boolean>(false)

  const handleIsOpen=(person:SearchPerson)=>{
    setSelectedPerson(person)
    setIsOpen(true)
  }
  const handleClose=()=>{
    setSelectedPerson(null)
    setIsOpen(false)
  }
  const results: SearchResult[] = data?.results || [];

  const isMovie = (item: SearchResult): item is SearchMovie =>
    item.media_type === "movie";

  const isPerson = (item: SearchResult): item is SearchPerson =>
    item.media_type === "person";

  const movies = results.filter(isMovie);
  const people = results.filter(isPerson);
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies or actors..."
        className="block w-[75vw] mx-auto p-4 mt-12 rounded-md bg-gray-900 border border-gray-700 text-white outline-none"
      />
      {isLoading && input!=="" && (
        <div className="mt-10 text-gray-100 animate-pulse">Searching....</div>
      )}
      {error && (
        <div className="mt-10 text-red-700">
          Error while searching movies...
        </div>
      )}

      {
        !isLoading && input!=="" && movies.length===0 && (
          <p>No movies/person found for "{`${debouncedQuery}`}"</p>
        )
      }
      {/* Movies Section */}
      {!isLoading && movies.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 px-6">Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
            {movies.map((movie) => (
              movie.poster_path &&
              <MovieCard key={movie.id} movie={movie} poster={true} />
            ))}
          </div>
        </section>
      )}

      {/* People Section */}
      {!isLoading && people.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 px-6">People</h2>

          <div className="flex gap-6 overflow-x-auto p-6">
            {people.map((person) => (
              <PersonCard
                key={person.id}
                person={person}
                castSection={false}
                handleOpen={handleIsOpen}
                // no-op handler; clicking doesn't do anything here
              />
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
        <PersonModal isOpen={isOpen} handleClose={handleClose} selectedPerson={selectedPerson||null}/>
    </div>
  );
};

export default SearchPage;
