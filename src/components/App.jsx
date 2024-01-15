import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);

const CastPage = lazy(() => import('pages/Cast/CastPage'));
const ReviewsPage = lazy(() => import('pages/Reviews/ReviewsPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<HomePage />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export { App };
