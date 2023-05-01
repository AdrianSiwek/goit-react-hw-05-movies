import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {fetchMovieById} from '../../service/moveAPI';
import Loader from 'components/Loader/Loader';
import style from './MoveDetalPage.module.css';
import { BackLink } from 'components/BackLink/BackLink';


const MoveDetalPage = ({searchMovie, to}) => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");



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
        <BackLink to={backLinkHref}>Go Back</BackLink>
          {/* <button
            type="button"
            className={style.buttonBack}>
            GO BACK
          </button> */}
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
            <Link to={'cast'} state={{ from: location }}>Cast</Link>
          </li>
          <li>
            <Link to={'review'} state={{ from: location }}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
        </>
     );
}

 
export default MoveDetalPage;