import React, { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { requestMovies } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const endpoint = `/movie/${movieId}`;
        const result = await requestMovies(endpoint);
        setMovie(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchMoviesDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      <GoBackBtn />

      {movie && <MovieInfo movie={movie} />}

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
