import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import type { Movie } from "../types/movie"


export const useWatchList = ()=>{
    const {user, isAuthenticated} = useAuth0()
    const [watchList,setWatchList] = useState<Movie[]>([])

    const storageKey = isAuthenticated? `watchlist_${user?.sub}`:null
    useEffect(()=>{

        if(!storageKey) return;

        const stored = localStorage.getItem(storageKey)
        if(stored){
            setWatchList(JSON.parse(stored))
        }
        else{
            setWatchList([])
        }
    },[storageKey])
    
    const updateStorage = (list: Movie[])=>{
        if(!storageKey) return
        setWatchList(list)
        localStorage.setItem(storageKey,JSON.stringify(list))
    }

    const addToWatchList = (movie: Movie)=>{
        if (!storageKey) return
        if (watchList.find((m)=>m.id===movie.id)) return
        updateStorage([...watchList,movie])
    }
    const removeFromWatchList=(id:number)=>{
        if(!storageKey) return
        const filteredData = watchList.filter((m)=>m.id!==id)
        updateStorage(filteredData)
    }
    return {
        updateStorage,
        addToWatchList,
        removeFromWatchList
    }
}