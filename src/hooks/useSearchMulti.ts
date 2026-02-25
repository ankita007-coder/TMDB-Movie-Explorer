import { useQuery } from "@tanstack/react-query"
import { searchMulti } from "../api/movieService"


export const useSearchMulti = (query: string) => {
    return useQuery({
        queryKey: ["search multi", query],
        queryFn: () => searchMulti(query),
    })
}