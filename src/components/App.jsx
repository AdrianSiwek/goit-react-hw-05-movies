// import style from './App.module.css'
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Page = lazy(() => import('./../page/Page/Page'));
const MoviesPage = lazy(() => import('./../page/MoviesPage/MoviesPage'));
const MoveDetalPage = lazy(() => import('./../page/MoveDetalPage/MoveDetalPage')); 
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


const App = () => {
  return ( 
    <div>
      <Navigation />
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoveDetalPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
   );
}
 
export default App;
