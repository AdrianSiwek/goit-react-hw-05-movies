import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css'
import classname from 'classnames';

const Navigation = () => {
    return (
        <header>
      <div className={style.mainContainer}>
        <nav className={style.mainNavigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
            classname(style.mainNavigation__link, { [style.active]: isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              classname(style.mainNavigation__link, { [style.active]: isActive })
            }
          
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
      );
}
 
export default Navigation;