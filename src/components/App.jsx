import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<HomePage />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}></Route>
          <Route path="/movies/:movieId/cast" element={<CastPage />}></Route>
          <Route
            path="/movies/:movieId/reviews"
            element={<ReviewsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export { App };

// import { HomePage } from "pages/HomePage/HomePage";
// import { MoviesPage } from "pages/MoviesPage";
// import { MovieDetailsPage } from "pages/MovieDetailsPage"
// import { CastPage } from "pages/CastPage";
// import { ReviewsPage } from "pages/ReviewsPage";
