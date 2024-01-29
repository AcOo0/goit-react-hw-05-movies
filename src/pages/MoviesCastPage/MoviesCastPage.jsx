import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMovieCredits } from "api/movies";
import { Loader } from "components/Loader/Loader";

import styles from "./movies-cast-page.module.css"

const MoviesCastPage = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchCast = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieCredits(id);                
                setCast(data.cast ? data.cast : []);
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        
        fetchCast();
    }, []);

    if (cast.length === 0) {
        return <p>Sorry we don't have any cast for this movie!</p>;
    };

    const elements = cast.map(({ id, profile_path, name, character }) => (
        <li className={styles.li} key={id}>
            {profile_path && (
                <img src={`${IMAGE_BASE_URL}${profile_path}`} alt={name} loading="lazy" />
            )}
            <p>{name}</p>
            <p>{character}</p>
        </li>
    ));

    const isCast = Boolean(cast.length);

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <Loader />}
            {isCast && <div className={styles.castWrap}>
                {elements}
            </div>
            }
        </>        
    )
}

export default MoviesCastPage;