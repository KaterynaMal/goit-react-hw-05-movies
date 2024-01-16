import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <div className={css.details_container}>
        <img
          src={
            movie.poster_path
              ? [`https://image.tmdb.org/t/p/w200/${movie.poster_path}`]
              : defaultImg
          }
          alt={movie.title}
          width={250}
        />

        <div className={css.discription}>
          <h2>{movie.title}</h2>
          <p>User Score: {String(movie.popularity).slice(0, 2)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(item => item.name).join(', ')}</p>
        </div>
      </div>

      <div className={css.additional}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Rewievs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { MovieInfo };
