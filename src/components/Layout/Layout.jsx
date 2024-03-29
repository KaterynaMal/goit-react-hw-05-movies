import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};
export { Layout };
