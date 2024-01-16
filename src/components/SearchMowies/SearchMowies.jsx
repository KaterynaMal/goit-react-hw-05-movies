import React from 'react';
import css from './SearchMowies.module.css';

const SearchMowies = ({ HandleSubmit, inputValue, HandleInput }) => {
  return (
    <div>
      <form action="" onSubmit={HandleSubmit} className={css.form}>
        <input
          type="text"
          value={inputValue}
          onChange={HandleInput}
          name="search"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};
export { SearchMowies };
