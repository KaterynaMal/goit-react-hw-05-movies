import React, { useEffect, useState,  } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { requestMovies } from 'services/api';


const MovieDetailsPage = () => {
  const location = useLocation();
  const [backLink] = useState(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const endpoint = `/movie/${movieId}`;
        const result = await requestMovies(endpoint);
        setMovie(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchMoviesDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>
        <button type='button'>Go back</button>
      </Link>

      {movie && (
        <div>
          {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>}
          <h2>{movie.title}</h2>
          <p>User Score: {String(movie.popularity).slice(0, 2)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(item => item.name).join(', ') }</p>
        </div>
      )}
      
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>

        {/* <li><Link to={'cast'}>Cast</Link></li> */}
        <li><Link to={'reviews'}>Rewievs</Link></li>
       
      </ul>
       
      
      
    </div>
  )
}

export default MovieDetailsPage ;