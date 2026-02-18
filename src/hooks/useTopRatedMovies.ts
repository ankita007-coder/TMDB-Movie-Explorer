import { useQuery } from "@tanstack/react-query"
import { getTopRatedMovies } from "../api/movieService"

export const useTopRatedMovies = ()=>{
    return useQuery({
        queryKey:["topRatedMovies"],
        queryFn: getTopRatedMovies
    })
}