import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetail } from "api/movies";
import { Loader } from "components/Loader/Loader";

import styles from "./single-movie.module.css"

const SingleMovie = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieDetail(id);
                setMovie(data);
            }
            catch {
                setError(error.message)
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, []);

    const {
        poster_path,
        title,
        original_title,
        release_date,
        vote_average,
        overview,
        genres,
    } = movie;

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <Loader />}
            {movie && (
                <>
                    <div className={styles.movieWrap}  >
                        <img
                        src={poster_path && `${IMAGE_BASE_URL}${poster_path}`}
                        alt={title} />
                        <div>
                            <h2>
                                {title || original_title}{' '}
                                <span className={styles.year}>{`(${release_date?.slice(0, 4)})`}</span>
                            </h2>
                            <p>User score: <span>{Math.round(vote_average * 10)}%</span></p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h3>Genres</h3>
                            <p>{genres && genres.map(genre => genre.name).join(' | ')}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3>Additional information</h3>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default SingleMovie;