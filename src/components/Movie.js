import React from 'react';
import { useParams } from 'react-router';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// NoImage
import NoImage from '../images/no_image.jpg';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie)
    // console.log(movie.actor.map(actor => {
    //     return actor;
    // }))


    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>

            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {
                    movie.actor.map(actor => (
                        <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            charecter={actor.charecter}
                            imageUrl={
                                actor.profile_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                            }
                        />
                    ))
                }
            </Grid>
        </>
    );
};

export default Movie;