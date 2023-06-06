import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';

const Stem = '../images/memories/HawaiiStemConference.jpg'

const BasicSlider = () => {
    return (
        <div className='img-side__main-img'>
            <Carousel breakPoints={breakPoints}>
            </Carousel>
        </div>
    )
}

export default BasicSlider;