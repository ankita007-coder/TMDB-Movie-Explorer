import type { Cast } from "../../types/movie"
import PersonCard from "./PersonCard"

interface CastSectionProps{
    cast: Cast[]
}


export default function CastSection({cast}:CastSectionProps) {
    if(cast.length===0) return null
    console.log(cast)
  return <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8">
        Top Cast
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-2">
        {cast.slice(0,8).map((member) => (
          <PersonCard key={member.id} person={member}/>
        ))}
      </div>
    </section>
}