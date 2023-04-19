import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './EditorList.module.css';

const EditorList = ({movies}) => {
    const location = useLocation();

    return ( 
        <ul className={style.movieList}>
            {movies && movies.map(movie => (
                <li className={style.movieList_item} key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
     );
}

EditorList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
 
export default EditorList;