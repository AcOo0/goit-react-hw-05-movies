import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import MoviesDetails from "pages/MoviesDetails/MoviesDetailsPage";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage/>} />
                    <Route path="movies" element={<MoviesPage />} />
                    <Route path="movies/:id" element={<MoviesDetails />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRoutes;