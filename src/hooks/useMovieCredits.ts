import { useQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../api/movieService"
import type { MovieCredits } from "../types/movie"


export const useMovieCredits = (id:string) => {
    return useQuery<MovieCredits>({
        queryKey: ["movieCredits", id],
        queryFn: () => getMovieCredits(id),
    })
}