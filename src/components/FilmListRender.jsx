import React from 'react';
import { Link } from 'react-router-dom';

const FilmListRender = ({ moviesList, location }) => {
  return (
    <div>
      {moviesList && (
        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }} />
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export { FilmListRender };
