import { useAuth0 } from "@auth0/auth0-react";

import MovieCard from "../components/movie/MovieCard";
import { Container } from "../components/reusable";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWatchList } from "../context/WatchlistContext";

const WatchlistPage = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const { watchList } = useWatchList();
  const [list,setList] = useState(watchList)
  const location = useLocation()

  useEffect(()=>{
    setList(watchList)
  },[watchList])
  if (isLoading) {
    return (
      <Container>
        <div className="py-20 text-center text-gray-400">Loading...</div>
      </Container>
    );
  }

  if (!isAuthenticated) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Sign in to view your Watchlist
          </h2>
          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: {
                  redirect_uri: window.location.origin + location.pathname,
                },
              })
            }
            className="px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </div>
      </Container>
    );
  }

  if (watchList.length === 0) {
    return (
      <Container>
        <div className="py-20 text-center text-gray-400">
          Your watchlist is empty.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-bold mb-10">My Watchlist</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {list.map((movie) => (
            <MovieCard key={movie.id} movie={movie} poster />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WatchlistPage;
