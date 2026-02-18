import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../api/movieService"

export const useTrendingMovies = () => {
    return useQuery({
        queryKey:["trendingMovies"],
        queryFn: getTrendingMovies
    })
}

