import React, { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { findMovies } from 'services/api';
import { Loader } from 'components/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsFofSearch =
    searchParams.size !== 0 ? searchParams.get('searchValue') : '';
  const [inputValue, setInputValue] = useState(paramsFofSearch || '');
  const [indicatorLoader, setIndicatorLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        if (!paramsFofSearch) {
          setIndicatorLoader(false);
          setMovies(null);
          return;
        }

        const endpoint = `/search/movie?query=${paramsFofSearch}&include_adult=false`;
        const result = await findMovies(endpoint);
        setMovies(result);
      } catch (error) {
        console.error('Error:', error.message);
        setMovies([]);
      }
      setIndicatorLoader(false);
    };

    fetchMovieByQuery();
  }, [paramsFofSearch]);

  const HandleSubmit = e => {
    e.preventDefault();
    setIndicatorLoader(true);
    const dataForSearch = e.currentTarget.elements.search.value;
    setSearchParams({ searchValue: dataForSearch });
  };

  const HandleInput = e => {
    const inputValue = e.currentTarget.value;
    setInputValue(inputValue);
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={HandleSubmit} className={css.form}>
          <input
            type="text"
            value={inputValue}
            onChange={HandleInput}
            name="search"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>

      {indicatorLoader && (
        <Loader /> 
      )}
      
        
        {movies !== null && movies.length > 0 && (
          <ul>
            {Array.isArray(movies) &&
              movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </li>
              ))}
          </ul>
        )
      }
    </div>
  );
};
export default MoviesPage;
