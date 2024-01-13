import { useEffect, useState } from 'react';
import React from 'react';
import { useParams, Link, useLocation} from 'react-router-dom';
// , Link, useLocation 
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

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image>'

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
                    // : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image>'
                   : {defaultImg}
                }
                alt={actor.name}
                width={250}
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
