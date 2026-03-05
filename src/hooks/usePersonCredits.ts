import { useQuery } from "@tanstack/react-query"
import { getPersonMovieCredits } from "../api/movieService"



export const usePersonCredits = (personId:string)=>{
    return useQuery({
        queryKey:["personCredits",personId],
        queryFn: ()=> getPersonMovieCredits(personId),
        enabled: !!personId
    })
}