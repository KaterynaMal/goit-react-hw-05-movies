import React from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = ({children}) => {
  return (
      <div>
          <header>
              <NavLink
        //        className={({ isActive }) =>
        //     `${css.navLink} ${isActive ? css.active : ''}`
        //   }
                  to='/'>
                  Home
              </NavLink>
              <NavLink to='/movies'>
                  Movies
              </NavLink>
          </header>
          <main>
              {children}
          </main>
    </div>
  )
}
