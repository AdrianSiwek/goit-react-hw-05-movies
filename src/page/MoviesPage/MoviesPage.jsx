import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import EditorList from '../EditorList/EditorList';
import style from './MoviesPage.module.css'
import { fetchSearchByQuery } from 'service/moveAPI';

// const MoviesPage = () => {

//     const [searchMovie, setSearchMovie] = useState([]);
//     const [loader, setLoader] = useState(false);
//     const [searchParams, setSearchParams] = useSearchParams({});
//     const query = searchParams.get("query");

//     const handleSubmit = event => {
//     event.preventDefault();
//     setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
//     };
    
//     useEffect(() => {
//     if (query) {
//       const onSearchMovie = async () => {
//         setLoader(true);
//         try {
//           const searchMovie = await getSearchingByQuery(query);
//           setSearchMovie(searchMovie);
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setLoader(false);
//         }
//       };
//       onSearchMovie();
//     }
//   }, [query]);

//     return (
//         <main className={style.moviesPage}>
//       <div className={style.mainContainer}>
//         <form onSubmit={handleSubmit} className={style.searchForm}>
//           <input type="text" name="query" autoFocus  className={style.searchForm__input} />
//           <button type="submit" className={style.searchForm__button}>Search</button>
//         </form>
//         {loader && <Loader />}
//         {searchMovie && <EditorList movies={searchMovie} />}
//       </div>
//     </main>
//   );
// };
     
 
// export default MoviesPage;

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };

  useEffect(() => {
    if (queryMovie) {
      const onSearchMovie = async () => {
        setLoader(true);
        try {
          const searchMovie = await fetchSearchByQuery(queryMovie);
          setSearchMovie(searchMovie);
        } catch (error) {
          console.log(error);
        } finally {
          setLoader(false);
        }
      };
      onSearchMovie();
    }
  }, [queryMovie]);

  return (
    <main className={style.moviesPage}>
      <div className={style.mainContainer}>
        <form onSubmit={handleSubmit} className={style.searchForm}>
          <input type="text" name="query" autoFocus  className={style.searchForm__input} />
          <button type="submit" className={style.searchForm__button}>Search</button>
        </form>
        {loader && <Loader />}
        {searchMovie && <EditorList movies={searchMovie} />}
      </div>
    </main>
  );
};

export default MoviesPage;