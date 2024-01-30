import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzIzYWFhMzc3MWU3N2E0NjlkNGEzYThkMTQxZGZmZSIsInN1YiI6IjY1YjRkMjFkNjBjNTFkMDE4NGQwYmIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XISfEw51jqEFhQV2E2EtFhEmH58uU8lMg5HWvJk3DDE";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`
    }
})

// const API_KEY = "8323aaa3771e77a469d4a3a8d141dffe";

export const getAllMovies = () => {
    return instance.get("/trending/movie/day")
}

export const searchMovies = (query, page = 1) => {
    return instance.get("/search/movie", {
        params: {
            // api_key: API_KEY,
            query,
            page,
        }
    })
}

export const getMovieDetail = id => {
    return instance.get(`/movie/${id}`
    //  {
    //     params: {
    //         api_key: API_KEY,
    //     }
    //     }
    )
}

export const getMovieCredits = id => {
    return instance.get(`/movie/${id}/credits`
        // {
        // params: {
        //     api_key: API_KEY,
        // }
        // }
    )
}

export const getMovieReview = id => {
    return instance.get(`/movie/${id}/reviews`
        // {
        // params: {
        //     api_key: API_KEY,
        // }
        // }
    )
}