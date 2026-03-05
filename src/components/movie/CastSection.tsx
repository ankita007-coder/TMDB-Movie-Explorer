import { useState } from "react";
import type { Cast, SearchPerson } from "../../types/movie";
import PersonCard from "./PersonCard";
import PersonModal from "./PersonModal";

interface CastSectionProps {
  cast: Cast[];
}

export default function CastSection({ cast }: CastSectionProps) {
  const [selectedPerson, setSelectedPerson] = useState<SearchPerson | null>(
    null,
  );

  const [isOpen,setIsOpen] = useState<boolean>(false)
  if (cast.length === 0) return null;

  const handleIsOpen=(person:SearchPerson)=>{
    setSelectedPerson(person)
    setIsOpen(true)
  }
  const handleClose=()=>{
    setSelectedPerson(null)
    setIsOpen(false)
  }
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8">Top Cast</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-2">
        {cast.slice(0, 8).map((member) => (
          <PersonCard key={member.id} person={member} handleOpen={handleIsOpen} castSection/>
        ))}
      </div>
    <PersonModal isOpen={isOpen} handleClose={handleClose} selectedPerson={selectedPerson||null}/>

    </section>
  );
}
