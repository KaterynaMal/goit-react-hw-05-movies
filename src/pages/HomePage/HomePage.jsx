import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { requestMovies } from 'services/api';
import { Loader } from 'components/Loader';
import css from '../HomePage/HomePage.module.css';
import { FilmListRender } from 'components/FilmList/FilmListRender';

const HomePage = () => {
   const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [indicatorLoader, setIndicatorLoader] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const endpoint = '/trending/movie/day';
        const result = await requestMovies(endpoint);
        setMovies(result.results);
      } catch (error) {
        console.error('Error:', error.message);
      }
      setIndicatorLoader(false);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h2 className={css.title}>Trending today</h2>

      {indicatorLoader && <Loader />}
      {movies && (
        <FilmListRender movies={movies} location={location } />)}
    </div>
  );
};

export default HomePage;
