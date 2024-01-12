import { useEffect, useState } from 'react';
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import { requestMovies } from 'services/api';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const location = useLocation();
  const [backLink] = useState(location.state?.from ?? '/');
  

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const endpoint = `/movie/${movieId}/credits`;
        const result = await requestMovies(endpoint);
        setCast(result.cast);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>
        <button type='button'>Go back</button>
      </Link>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li
              key={
                cast.some(child => child.id === actor.id)
                  ? actor.id + Math.floor(Math.random() * 1000000)
                  : actor.id
              }
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : 'https://lh3.googleusercontent.com/pw/ABLVV84zci9C9zWeXHgV9_NUIfxRzW_2SyA3whYBaXKw-mF-AB8bYqM2abi0T5518xnJmjAH0f2AkDYz8PGjJHkORp7Czcuw7_oK_ZRVlep-TCCFXh98G7GA7i5EeVXXnr2PrwMOwAHPqxnlDQ5_lKz0__rZQw=w600-h600-s-no-gm?authuser=0'
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CastPage;
