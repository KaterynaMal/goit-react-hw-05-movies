import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import { requestMovies } from 'services/api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  const location = useLocation();
  const [backLink] = useState(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchReview = async () => {
      try {
        const endpoint = `/movie/${movieId}/reviews`;
        const result = await requestMovies(endpoint);
        setReview(result.results);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>
        <button type="button">Go back</button>
      </Link>

      {review && review.length > 0 ? (
        <ul>
          {review.map(post => (
            <li key={post.id}>
              <h3>{post.author}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default ReviewsPage;
