// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import {fetchActors} from '../../service/moveAPI';
// import Loader from 'components/Loader/Loader';
// import style from './Cast.module.css'


// const Cast = () => {
//     const { movieId } = useParams();
//     const { loader, setLoader } = useState(false);
//     const { actors, setActors } = useState([]);


//     useEffect(() => {
//         const onActorsInMoved = async () => {
//             setLoader(true);
//             try {
//                 const actors = await fetchActors(movieId);
//                 setActors(actors);
//             } catch (err) {
//                 console.log(err)
//             } finally {
//                 setLoader(false);
//              }
//         }
//         onActorsInMoved();
//      }, [movieId])

//     return (
//         <div>
//             {loader && <Loader />}
//             <ul className={style.castList}>
//                 {actors.map(actor => (
//                     <li className={style.castItem} key={actor.id}>
//                     <img
//                         width="200px"
//                         src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
//                             alt={actor.original_name} />
//                         <div className={style.actorDscr}>
//                             <p className={style.personName}>{actor.name}</p>
//                             <p className={style.character}>Character: {actor.character}</p>
//                         </div>
//                 </li>
//                 ))}
                
//             </ul>
//         </div>
//      );
// }
 
// export default Cast;


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchActors} from '../../service/moveAPI';
import Loader from 'components/Loader/Loader';
import style from './Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoader(true);
      try {
        const actors = await fetchActors(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      <ul className={style.castList}>
        {actors.map(actor => (
          <li className={style.castItem} key={actor.id}>
            <img
              width="200"
              src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              alt={actor.original_name}
            />
            <div className={style.actorDescr}>
                <p className={style.personName}>{actor.name}</p>
                <p className={style.character}>Character: {actor.character}</p>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;