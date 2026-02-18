import { useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../api/movieService"

export const usePopularMovies = ()=>{
    return useQuery({
        queryKey:["popularMovies"],
        queryFn: getPopularMovies
    })
}