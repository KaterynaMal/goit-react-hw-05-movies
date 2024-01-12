import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';

import css from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const trending = searchParams.get('trending');

  useEffect(() => {
    if (trending === null) return;

    const fetchTrendingMovies = async () => {
      try {
        const endpoint = '/trending/movie/day';
        const trendingMoviesData = await requestMovies(endpoint);

        if (trendingMoviesData.results) {
          setTrendingMovies(trendingMoviesData.results);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };

    setSearchParams({
      trending,
    });

    fetchTrendingMovies();
  }, [trending, setSearchParams]);

  return (
    <div className={css.homePage}>
      <h2 className={css.title}>Trending movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;


  //   useEffect(() => {
  //     if (trending === null) return;

  //     setSearchParams({
  //       trending,
  //     });
  //   }, [trending, setSearchParams]);

  //   useEffect(() => {
  //     if (trending === null) return;

  //     const fetchTrendingMovies = async () => {
  //       const endpoint = '/trending/movie/day';

  //       const trendingMovies = await requestMovies(endpoint);
  //       setTrendingMovies(trendingMovies.results);
  //     };
  //     fetchTrendingMovies();
  //   }, [trending]);