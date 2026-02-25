import type { SearchPerson } from "../../types/movie"

interface PersonCardProps{
    person: SearchPerson
}
const PersonCard = ({person}:PersonCardProps) => {
  return (
    <div>
      {person.name}
    </div>
  )
}

export default PersonCard
