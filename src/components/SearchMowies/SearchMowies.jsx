// import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchMowies.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchMowies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // const query = searchParams.get('query');
  //  setSearchParams({
  //     sQuery: searchValue,
  //   });
  

  const handleSearch = () => {
    navigate(`/movies?query=${searchParams}`);
  };

  return (
    <div>
      <form action="" className={css.form}>
        <input
          type="text"
          value={searchParams}
          onChange={e => setSearchParams(e.target.value)}
          className={css.input}
        />
        <button onClick={handleSearch} type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};
export { SearchMowies };
