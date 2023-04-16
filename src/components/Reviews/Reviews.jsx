import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchReviews} from '../../service/moveAPI';
import Loader from 'components/Loader/Loader';
import Notiflix from "notiflix";

const Reviews = () => {
    const { movieId } = useParams();
    const [loader, setLoader] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const onActorsInMoved = async () => {
            setLoader(true);
            try {
                const reviews = await fetchReviews(movieId);
                setReviews(reviews);
            } catch (err) {
                console.log(err)
            } finally {
                setLoader(false);
             }
        }
        onActorsInMoved();
     }, [movieId])

    return ( 
        <>
            {loader && <Loader />}
            {reviews.length !== 0 && (
                <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
            )}
            {reviews.length === 0 && 
            Notiflix.Notify.info("We don't have any reviews for this movie")}
        </>
     );
}
 
export default Reviews;