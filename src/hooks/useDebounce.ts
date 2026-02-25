import { useEffect, useState } from "react"

export const useDebounce = (query:string,delay:number)=>{
    const [debouncedValue,setDebouncedValue] = useState(query)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(query)
        },delay)

        return ()=> clearTimeout(timer)
    },[query,delay])

    return debouncedValue;
}