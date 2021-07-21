import React from 'react';

import { Image } from './thumb.styles'

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;