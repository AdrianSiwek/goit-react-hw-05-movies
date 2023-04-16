import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div>
            <nav>
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
      );
}
 
export default Navigation;