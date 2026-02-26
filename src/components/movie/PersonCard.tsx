import type { SearchPerson } from "../../types/movie";


interface PersonCardProps {
  person: SearchPerson;
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

const PersonCard = ({ person }: PersonCardProps) => {


  return (
    <div className="min-w-[160px] cursor-pointer group">
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
          {person.known_for_department}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;