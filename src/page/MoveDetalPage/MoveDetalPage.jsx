import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {fetchMovieById} from '../../service/moveAPI';
import Loader from 'components/Loader/Loader';
import style from './MoveDetalPage.module.css';

const MoveDetalPage = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loader, setLoader] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const onDetalMovie = async () => {
            setLoader(true);
            try {
                const detalyMovie = await fetchMovieById(movieId);
                setMovieInfo(detalyMovie);
            } catch (err) {
                console.log(err)
            } finally {
                setLoader(false);
            }
        }
        onDetalMovie();
    }, [movieId])
    
    return ( 
        <>
            <Link to={location?.state?.from ?? '/'}>
          <button type="button" className={style.buttonBack}>
            Back to Home
                </button>
            </Link>
            {loader && <Loader />}
            {movieInfo && (
        <div className={style.movieDetalis}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div className={style.genreList}>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={style.genreList}>
              {movieInfo.genres.map(genre => (
                <li className={style.genreList} key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div className={style.moreInformation}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
        </>
     );
}
 
export default MoveDetalPage;