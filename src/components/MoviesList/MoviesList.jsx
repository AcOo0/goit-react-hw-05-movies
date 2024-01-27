import { useEffect, useState } from "react";

import { Loader } from "components/Loader/Loader";

import MoviesListItem from "./MoviesListItem/MoviesListItem";

import { getAllMovies } from "api/movies";

import styles from './movies-list.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getAllMovies();
                
                setMovies(data.results?.length ? data.results : []);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
            fetchMovies()
    }, []);

    const isMovies = Boolean(movies.length);    
        
        return (
            <>
                {error && <p>{error}</p>}
                {loading && <Loader/>}
                {isMovies && (  <ul className={styles.moviesList}>
                                    <MoviesListItem items={movies} />
                                </ul>)}
            </>
            
        )
}

export default MoviesList;