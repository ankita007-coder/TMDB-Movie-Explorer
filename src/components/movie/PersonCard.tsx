import type { SearchPerson, Cast } from "../../types/movie";


// if castSection is true we expect a Cast object, otherwise a SearchPerson
type PersonCardProps =
  | { castSection: true; person: Cast; handleOpen: (person: Cast) => void }
  | { castSection: false; person: SearchPerson; handleOpen?: (person: SearchPerson) => void };



const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

const PersonCard = (props: PersonCardProps) => {
  const { person, handleOpen, castSection } = props;

  return (
    <div
      className="min-w-[160px] cursor-pointer group"
      onClick={() => handleOpen?.(person as any)}
    >
      <div className="w-[160px] h-[240px] rounded-lg overflow-hidden bg-gray-800 relative transition-transform duration-300 group-hover:scale-105">
        {person.profile_path ? (
          <img
            src={`${IMAGE_BASE}${person.profile_path}`}
            alt={person.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="mt-3">
        <p className="text-sm font-semibold text-white line-clamp-1">
          {person.name}
        </p>

        <p className="text-xs text-gray-400 line-clamp-2">
          {castSection ? (person as Cast).character : (person as SearchPerson).known_for_department}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;