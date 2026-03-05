import { usePersonCredits } from "../../hooks/usePersonCredits";
import { usePersonDetails } from "../../hooks/usePersonDetails";
import Loading from "../../pages/Loading";
import type { Movie, SearchPerson } from "../../types/movie";
import { Modal } from "../reusable";
import MovieCard from "./MovieCard";

interface PersonModalProps {
  isOpen: boolean;
  selectedPerson: SearchPerson | null;
  handleClose: () => void;
}

export default function PersonModal({
  isOpen,
  selectedPerson,
  handleClose,
}: PersonModalProps) {
  const { data, isLoading } = usePersonCredits(
    selectedPerson?.id ? String(selectedPerson.id) : "",
  );
  const { data: personDetails } = usePersonDetails(
    selectedPerson?.id ? String(selectedPerson.id) : undefined,
  );
  if (isLoading) {
    return <Loading />;
  }
  const knownMovies =
    data?.cast
      ?.filter((item: any) => item.media_type === "movie")
      ?.sort((a: any, b: any) => b.popularity - a.popularity)
      ?.slice(0, 6) || [];
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {selectedPerson && (
        <div className="flex gap-6 items-center">
          <div className="w-[160px] h-[240px] rounded-lg overflow-hidden bg-gray-800 relative transition-transform duration-300 group-hover:scale-105">
            {selectedPerson.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${selectedPerson.profile_path}`}
                alt={selectedPerson.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-gray-500">
                No Image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{selectedPerson.name}</h2>
            <p className="text-gray-400 mb-4">
              {selectedPerson.known_for_department}
            </p>
            {personDetails?.biography && (
              <p className="text-gray-400 mt-4 text-sm leading-relaxed line-clamp-6 max-w-xl">
                {personDetails.biography.split(".").splice(0,4).join(".").trim()}.
              </p>
            )}
          </div>
        </div>
      )}
      {knownMovies.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Known For</h3>

          <div className="flex gap-4 overflow-x-auto px-3 py-4">
            {knownMovies.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                poster
                onMovieClick={handleClose}
              />
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
