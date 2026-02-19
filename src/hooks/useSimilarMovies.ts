import { useQuery } from "@tanstack/react-query"
import { getSimilarMovies } from "../api/movieService"

export const useSimilarMovies = (id:string)=>{
    return useQuery({
        queryKey:["similarMovies",id],
        queryFn:()=>getSimilarMovies(id)
    })
}