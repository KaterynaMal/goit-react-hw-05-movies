import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovies } from 'services/api';

import css from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

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
    <div className={css.reviewsContainer}>
      {review && review.length > 0 ? (
        <ul className={css.reviewsList}>
          {review.map(post => (
            <li className={css.reviewsItem} key={post.id}>
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
