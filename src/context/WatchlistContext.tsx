import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Movie } from "../types/movie";

interface WatchlistContextProps {
  watchList: Movie[];
  addToWatchList: (movie: Movie) => void;
  removeFromWatchList: (id: number) => void;
  inWatchList: (id: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextProps | undefined>(
  undefined,
);

export const WatchlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, isAuthenticated } = useAuth0();
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const storageKey = isAuthenticated ? `watchlist_${user?.sub}` : null;

  useEffect(() => {
    if (!storageKey) {
      setWatchList([]);
      return;
    }

    const stored = localStorage.getItem(storageKey);
    setWatchList(stored ? JSON.parse(stored) : []);
  }, [storageKey]);

  const addToWatchList = (movie: Movie) => {
    if (!storageKey) return;

    setWatchList((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;

      const updated = [...prev, movie];
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromWatchList = (id: number) => {
    if (!storageKey) return;

    setWatchList((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const inWatchList = (id: number): boolean => {
    if (!storageKey) return false;
    return watchList.some((m) => m.id === id);
  };

  const value = useMemo(
    () => ({
      watchList,
      addToWatchList,
      removeFromWatchList,
      inWatchList,
    }),
    [watchList],
  );
  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(WatchlistContext);

  if (!context) {
    throw new Error("useWatchList must be used within WatchlistProvider");
  }

  return context;
};
