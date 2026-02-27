import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import type { Movie } from "../types/movie"


export const useWatchList = () => {
  const { user, isAuthenticated } = useAuth0();
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const storageKey = isAuthenticated
    ? `watchlist_${user?.sub}`
    : null;

  useEffect(() => {
    if (!storageKey) {
      setWatchList([]);
      return;
    }

    const stored = localStorage.getItem(storageKey);
    setWatchList(stored ? JSON.parse(stored) : []);
  }, [storageKey]);

  const updateStorage = (list: Movie[]) => {
    if (!storageKey) return;
    setWatchList(list);
    localStorage.setItem(storageKey, JSON.stringify(list));
  };

  const addToWatchList = (movie: Movie) => {
    if (!storageKey) return;
    if (watchList.some((m) => m.id === movie.id)) return;
    updateStorage([...watchList, movie]);
  };

  const removeFromWatchList = (id: number) => {
    if (!storageKey) return;
    updateStorage(watchList.filter((m) => m.id !== id));
  };

  const inWatchList = (id: number): boolean => {
    if (!storageKey) return false;
    return watchList.some((m) => m.id === id);
  };

  return {
    watchList,
    addToWatchList,
    removeFromWatchList,
    inWatchList,
  };
};