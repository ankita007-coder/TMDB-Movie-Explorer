import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../pages/Loading";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("../pages/Home"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
