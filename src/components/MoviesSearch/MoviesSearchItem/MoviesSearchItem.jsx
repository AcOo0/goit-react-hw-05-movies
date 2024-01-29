import { Link, useLocation } from 'react-router-dom';

import styles from './movies-search-item.module.css'

const MoviesSearchItem = ({ items }) => {
    const location = useLocation();
    const elements = items.map(({
            id,
            title,
    }) => <Link to={`/movies/${id}`} state={{from: location}} key={id} className={styles.moviesSearchItem}>
            {title}
        </Link>);
    return elements;
}

export default MoviesSearchItem;