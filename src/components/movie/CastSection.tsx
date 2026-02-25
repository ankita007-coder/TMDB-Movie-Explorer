import type { Cast } from "../../types/movie"

interface CastSectionProps{
    cast: Cast[]
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300"

export default function CastSection({cast}:CastSectionProps) {
    if(cast.length===0) return null
  return <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Top Cast
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {cast.slice(0,8).map((member) => (
          member.profile_path &&
          <div
            key={member.id}
            className="min-w-[140px] flex-shrink-0"
          >
            <div className="w-[140px] h-[200px] rounded-lg overflow-hidden bg-gray-800">
              {member.profile_path ? (
                <img
                  src={`${IMAGE_BASE}${member.profile_path}`}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                  No Image
                </div>
              )}
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium">
                {member.name}
              </p>
              <p className="text-xs text-gray-400">
                {member.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
}