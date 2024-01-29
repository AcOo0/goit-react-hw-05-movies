import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "components/Button/Button";
import { Loader } from "components/Loader/Loader";

import Searchbar from "./Searchbar/Searchbar";
import MoviesSearchItem from "./MoviesSearchItem/MoviesSearchItem";

import { searchMovies } from "api/movies";

import styles from './movies-search.module.css'

const MoviesSearch = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prevSearch, setPrevSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const page = searchParams.get("page");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);

                const { data } = await searchMovies(search, page);

                if (data.results.length === 0) {
                    return alert('Ох! Нажаль за Вашим запитом нічого не знайдено');
                }

                setResults(prevResults => data.results?.length ? [...prevResults, ...data.results] : prevResults)
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        if (search && (search.toLowerCase() !== prevSearch.toLowerCase() || page !== 1)) {
            fetchMovies();
            setPrevSearch(search);
        }
        
    }, [search, page, prevSearch]);

    const handleSearch = ({ search }) => {
        if (search.toLowerCase() === prevSearch.toLowerCase()) {
            return alert(`Ви й так шукаєте "${search}"`);
        }
        setSearchParams({ search, page: 1 })
        setResults([]);
    };

    const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });

    const isImages = Boolean(results.length);
    console.log(results);
        
        return (
            <>
                <Searchbar onSubmit={handleSearch} />
                {error && <p>{error}</p>}
                {loading && <Loader/>}
                {isImages && (  <ul className={styles.moviesSearch}>
                                    <MoviesSearchItem items={results} />
                                </ul>)}
                {isImages && <div className={styles.loadMoreWrapper}>
                                <Button onClick={loadMore} type="button">Load more</Button>
                </div>}
            </>
            
        )
}

export default MoviesSearch;