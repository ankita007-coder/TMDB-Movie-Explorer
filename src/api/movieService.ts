import { type ApiResponse, type Movie, type MovieDetails, type WatchProvidersResponse, type MovieCredits } from "../types/movie"
import { tmdbClient } from "./tmdbClient"



export const getTrendingMovies = async()=>{
    const {data} = await tmdbClient.get<ApiResponse<Movie>>("/trending/movie/week")
    return data
}

export const getPopularMovies = async()=>{
    const {data} = await tmdbClient.get<ApiResponse<Movie>>("/movie/popular")
    return data
}

export const getTopRatedMovies = async()=>{
    const {data} = await tmdbClient.get<ApiResponse<Movie>>("/movie/top_rated")
    return data
}

export const searchMovies = async(query:string)=>{
    const {data} = await tmdbClient.get<ApiResponse<Movie>>("/search/movie",{
        params:{
            query
        }
    })
    return data
}

export const getMovieDetails = async(movieId:string)=>{
    const {data} = await tmdbClient.get<MovieDetails>(`/movie/${movieId}`)
    return data
}

export const getMovieCredits = async(movieId:string)=>{
    const {data} = await tmdbClient.get<MovieCredits>(`/movie/${movieId}/credits`)
    return data
}

export const getMovieWatchProviders = async(movieId:string)=>{
    const {data} = await tmdbClient.get<WatchProvidersResponse>(`/movie/${movieId}/watch/providers`)
    return data
}

export const getSimilarMovies = async(movieId:string)=>{
    const {data} = await tmdbClient.get<ApiResponse<Movie>>(`/movie/${movieId}/similar`)
    return data
}