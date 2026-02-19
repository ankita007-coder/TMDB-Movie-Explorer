import { useQuery } from "@tanstack/react-query"
import { getMovieWatchProviders } from "../api/movieService"

export const useMovieProviders = (id:string) =>{
    return useQuery({
        queryKey:["movieWatchProviders",id],
        queryFn: ()=> getMovieWatchProviders(id)
    })
}