
import React, { useState, useEffect } from 'react';

// components
import Herolmage from './HeroImage';
import Grid from './Grid';
import Thumb from './thumb';
import Spinner from './Spinner';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error } = useHomeFetch();

    console.log(state)
    // console.log(state.results[0])
    // console.log(JSON.stringify(state.results[0]))



    return (
        <>
            {state.results[0] ? (
                < Herolmage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <Grid header='Popular Movies'>
                {
                    state.results.map(movie => (
                        <Thumb
                            key={movie.id}
                            clickable
                            image={
                                movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                    : NoImage
                            }
                            movieId={movie.id}
                        />
                    ))
                }
            </Grid>
            <Spinner />
        </>
    );
};

export default Home;