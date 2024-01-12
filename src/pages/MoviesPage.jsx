import React from 'react';

import { SearchMowies } from 'components/SearchMowies/SearchMowies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MoviesPage = () => {
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return
  }, [movieId])
    
  return (
    <div>
      <SearchMowies></SearchMowies>
    </div>
  )
}
export default MoviesPage ;