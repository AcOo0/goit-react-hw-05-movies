import { Suspense, useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getMovieDetail } from "api/movies";
import { Loader } from "components/Loader/Loader";

import styles from "./single-movie.module.css"

const SingleMovie = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const location = useLocation();

    const from = location.state?.from || "/";

    const navigate = useNavigate();
    
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

    const goBack = () => navigate(from);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <Loader />}
            <button onClick={goBack} type="button" className={styles.btn}>Go back</button>
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
                        <div className={styles.linkWrap}>
                            <Link to="cast" state={{ from: from }}>Cast</Link>
                            <Link to="reviews" state={{ from: from }}>Reviews</Link>
                        </div>
                            <Outlet />                     
                    </div>
                </>
            )}
            
        </div>
    )
};

export default SingleMovie;