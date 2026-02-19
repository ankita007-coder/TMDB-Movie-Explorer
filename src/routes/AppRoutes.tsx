import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../pages/Loading";

const HomePage = lazy(() => import("../pages/Home"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      
    </Suspense>
  );
};

export default AppRoutes;