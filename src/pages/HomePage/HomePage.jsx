import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestMovies } from 'services/api';

import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const endpoint = '/trending/movie/day';
        const result = await requestMovies(endpoint);
        setTrendingMovies(result.results);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h2 className={css.title}>Trending movies</h2>
      <ul className={css.list}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.movie_link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
