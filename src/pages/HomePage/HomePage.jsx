import React from 'react';
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
      <div
          className={css.homePage}
      >
          <h2 className={css.title}>Popular films</h2>
      </div>
  )
}

export { HomePage };