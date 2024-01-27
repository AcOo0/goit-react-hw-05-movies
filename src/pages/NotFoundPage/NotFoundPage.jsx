import { Link } from "react-router-dom";

import styles from "./not-found-page.module.css"

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to="/">To home page</Link>
        </div>
    )
}

export default NotFoundPage;