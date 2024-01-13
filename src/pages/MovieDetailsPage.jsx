import React, { Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Link,
  useLocation,
  useParams,
  Routes,
  Route,
} from 'react-router-dom';
import { requestMovies } from 'services/api';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';
import css from '../pages/MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const location = useLocation();
  const [backLink] = useState(location.state?.from ?? '/');
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

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

  return (
    <div className={css.container}>
      <Link to={backLink} >
        <button type="button" className={css.backBtn}>Go back</button>
      </Link>

      {movie && (
        <div className={css.details_container}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              width={250}
            />
          )}
           {!movie.poster_path && (
            <img
              src={defaultImg}
              alt={movie.title}
              width={250}
            />
          )}

          <div className={css.discription}>
 <h2>{movie.title}</h2>
          <p>User Score: {String(movie.popularity).slice(0, 2)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(item => item.name).join(', ')}</p>
          </div>
         
        </div>
      )}

      <div className={css.additional}>
<p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>

        <li>
          <NavLink to="reviews">Rewievs</NavLink>
        </li>
      </ul>
      </div>
      

      <Suspense>
        <Routes>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
