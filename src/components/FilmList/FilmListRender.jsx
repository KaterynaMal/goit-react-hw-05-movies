import React from 'react';
import { Link } from 'react-router-dom';
import css from './FilmList.module.css';

const FilmListRender = ({ movies, location }) => {
  return (
    <div>
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.movie_link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      
    </div>
  );
};
export { FilmListRender };
