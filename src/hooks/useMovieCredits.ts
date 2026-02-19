import { useQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../api/movieService"


export const useMovieCredits = (id:string)=>{
    return useQuery({
        queryKey:["movieCredits",id],
        queryFn: ()=> getMovieCredits(id)
    })
}