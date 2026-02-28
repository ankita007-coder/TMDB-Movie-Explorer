import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { FaHeart } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useWatchList } from "../../context/WatchlistContext";

const Header = () => {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } =
    useAuth0();
  const location = useLocation();
  const { watchList } = useWatchList();
  const [count,setCount] = useState(watchList.length)
  useEffect(()=>{
    setCount(watchList.length)
  },[watchList])
  
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-red-600 tracking-wide">
          MOVIX
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm text-gray-300">
          <Link
            to="/"
            className={`hover:text-white transition ${
              location.pathname === "/" ? "text-white" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/search"
            className={`hover:text-white transition ${
              location.pathname === "/search" ? "text-white" : ""
            }`}
          >
            Search
          </Link>
        </nav>

        {/* Auth Placeholder */}
        {isLoading ? null : !isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="text-sm hover:text-white"
          >
            Sign In
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/watchlist" className="relative group">
              <FaHeart className="text-2xl text-white group-hover:text-red-500 transition" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </Link>
            <img
              src={user?.picture}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
              className="text-sm hover:text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
