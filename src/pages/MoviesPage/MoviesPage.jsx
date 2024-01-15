import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovies } from 'services/api';
import { Loader } from 'components/Loader';
import { FilmListRender } from 'components/FilmList/FilmListRender';
import { SearchMowies } from 'components/SearchMowies/SearchMowies';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsFofSearch =
    searchParams.size !== 0 ? searchParams.get('searchValue') : '';
  const [inputValue, setInputValue] = useState(paramsFofSearch || '');
  const [indicatorLoader, setIndicatorLoader] = useState(true);

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
        setMovies(result.results);
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
      <SearchMowies
        inputValue={inputValue}
        HandleSubmit={HandleSubmit}
        HandleInput={HandleInput}
      />

      {indicatorLoader && <Loader />}

      {movies !== null && movies.length > 0 && (
        <FilmListRender movies={movies} />
      )}
    </div>
  );
};
export default MoviesPage;
