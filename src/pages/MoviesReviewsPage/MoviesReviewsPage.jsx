import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMovieReview } from "api/movies";
import { Loader } from "components/Loader/Loader";

import styles from "./movies-reviews-page.module.css"

const MovieReviewPage = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchReview = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieReview(id);
                setReview(data.results?.length !== 0 ? data.results : []);
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }

        fetchReview();
    }, []);

    if (review.length === 0) {
                    return <p>Sorry we don't have any reviews for this movie!</p>;
    }
    
    const elements = review.map(({ id, author, content }) => (
        <li className={styles.li} key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
        </li>
    ));

    const isReviews = Boolean(review.length);

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <Loader />}
            {isReviews && <div className={styles.reviewsWrap}>
                {elements}
            </div>
            }
        </>        
    )
}

export default MovieReviewPage;