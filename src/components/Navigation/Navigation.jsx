import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <header>
        <div className={style.mainContainer}>
            <nav className={style.mainNavigation}>
                <NavLink
                    to='/'
                    className={({isActive}) => isActive ? style.active: undefined}
                >
                    Home
                </NavLink>
                <NavLink
                    to='movies'
                    className={({isActive}) => isActive ? style.active: undefined}
                >
                    Movies
                </NavLink>
            </nav>
            </div>
            </header>
      );
}
 
export default Navigation;