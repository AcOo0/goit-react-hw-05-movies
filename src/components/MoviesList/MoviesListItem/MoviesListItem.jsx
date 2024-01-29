
import { Link } from 'react-router-dom';

import styles from './movies-list-item.module.css'

const MoviesListItem = ({ items }) => {

    const elements = items.map(({
            id,
            title,
            }) => <li key={id} className={styles.moviesListItem}>
            <Link to={`/movies/${id}`} state={{from: "/"}}>
                {title}
            </Link>
        </li>);
    return elements;
}

export default MoviesListItem;