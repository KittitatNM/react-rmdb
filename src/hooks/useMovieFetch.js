import { useState, useEffect, useCallback } from "react";
import API from '../API'

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoaing] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoaing(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            // Get Directors only
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...movie,
                actor: credits.cast,
                directors
            });

            setLoaing(false);

        } catch (error) {
            setError(true);
        }
    },[movieId])

    useEffect(() => {
        fetchData();
    }, [movieId, fetchData]);

    return { state, loading, error }
}
