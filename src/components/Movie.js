import React from 'react';
import { useParams } from 'react-router';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';

// NoImage
import NoImage from '../images/no_image.jpg';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie)

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>

            <BreadCrumb movieTitle={movie.original_title} />
        </>
    );
};

export default Movie;