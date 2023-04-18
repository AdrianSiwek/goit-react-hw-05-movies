import React, { useEffect, useState } from 'react';
import EditorList from '../EditorList/EditorList';
import getTrendDay from '../../service/moveAPI';
import Loader from 'components/Loader/Loader';
import style from './Page.module.css';

const Page = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const FetchTrendDay = async () => {
            setLoader(true);
            try {
                const trendday = await getTrendDay();
                setMovies(trendday)
            } catch (err) {
                console.log(err)
            } finally {
                setLoader(false);
            }
        } 
        FetchTrendDay();
    }, [])
    

    return ( 
        <main>
      <h1 className={style.title}>Trending today</h1>
      {movies && <EditorList movies={movies} />}
      {loader && <Loader />}
    </main>
     );
}
 
export default Page;