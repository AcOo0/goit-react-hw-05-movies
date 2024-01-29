import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MoviesDetails = lazy(() => import("pages/MoviesDetails/MoviesDetailsPage"));
const MoviesCastPage = lazy(() => import("pages/MoviesCastPage/MoviesCastPage"));
const MovieReviewPage = lazy(() => import ("pages/MoviesReviewsPage/MoviesReviewsPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
    return (        
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage/>} />
                    <Route path="movies" element={<MoviesPage />} />
                    <Route path="movies/:id" element={<MoviesDetails />}>
                        <Route path="cast" element={<MoviesCastPage />} />
                        <Route path="reviews" element={<MovieReviewPage />} />
                    </Route>                    
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
    )
};

export default AppRoutes;