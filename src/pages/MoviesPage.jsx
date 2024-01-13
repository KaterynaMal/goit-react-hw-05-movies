import React, { useEffect, useState, Suspense } from 'react';
import css from './MoviesPage.module.css';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { requestMovies } from 'services/api';

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
        const result = await requestMovies(endpoint);
        setMovies(result);
        //  .results
      } catch (error) {
        console.error('Error:', error.message);
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
      <Suspense fallback={<div>Loading...</div>}>
        {/* <SearchMowies /> */}
        <div>
          <form
            action=""
            onSubmit={HandleSubmit}
            className={css.form}
          >
            <input
              type="text"
              value={inputValue}
              onChange={HandleInput}
              name="search"

              className={css.input}
            />
            <button
              type="submit"
              className={css.button}
            >
              Search
            </button>
          </form>
        </div>
      </Suspense>
      {indicatorLoader && <div>Loading...</div>}
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MoviesPage;
