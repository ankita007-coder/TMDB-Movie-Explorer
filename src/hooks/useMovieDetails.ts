import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../api/movieService"


export const useMovieDetails = (id:string)=>{
    return useQuery({
        queryKey:["movieDetails",id],
        queryFn: ()=> getMovieDetails(id)
    })
}