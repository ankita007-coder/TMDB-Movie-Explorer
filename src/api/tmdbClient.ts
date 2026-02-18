import axios from "axios"

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const tmdbClient = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key: TMDB_API_KEY
    },
    headers:{
        "Content-Type":"application/json"
    }
})

tmdbClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.error(error)
        return Promise.reject(error)
    }
)