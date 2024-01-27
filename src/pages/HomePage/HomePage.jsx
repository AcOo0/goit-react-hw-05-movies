import MoviesList from "../../components/MoviesList/MoviesList";

import styles from "./home-page.module.css"

const HomePage = () => {
    return (
        <div>
            <h2>Trending today</h2>
            <MoviesList/>
        </div>
    )
}

export default HomePage;