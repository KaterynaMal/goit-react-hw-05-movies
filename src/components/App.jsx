import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage"
import { CastPage } from "pages/CastPage";
import { ReviewsPage } from "pages/ReviewsPage";

 function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        <Route path="/movies/:movieId/cast" element={<CastPage />}></Route>
        <Route path="/movies/:movieId/reviews" element={<ReviewsPage />}></Route>
      </Routes>
      
   </Layout>
  
    
  );
};

export {App}
