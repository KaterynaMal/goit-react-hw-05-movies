import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestMovies } from 'services/api';
import { Circles } from 'react-loader-spinner';

import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [indicatorLoader, setIndicatorLoader] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const endpoint = '/trending/movie/day';
        const result = await requestMovies(endpoint);
        setTrendingMovies(result.results);
      } catch (error) {
        console.error('Error:', error.message);
      }
      setIndicatorLoader(false);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h2 className={css.title}>Trending movies</h2>

      {indicatorLoader && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      <ul className={css.list}>
        {trendingMovies.map(movie => (
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

export default HomePage;
