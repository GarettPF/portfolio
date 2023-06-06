import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';

import stem from '../images/memories/stem.jpg';
import nalukai from '../images/memories/nalukai.JPG';
import trumpet from '../images/memories/trumpet.JPG';
import grad from '../images/memories/grad.jpg';

const items = [
    {id: 1, src: stem, alt: 'Stem Conference Winners 2019'},
    {id: 2, src: nalukai, alt: 'Nalukai Summer Camp'},
    {id: 3, src: trumpet, alt: 'Marching Band'},
    {id: 4, src: grad, alt: 'Graduation. UNLV'},
]

const totalPages = Math.ceil(items.length)
let resetTimeout;

const BasicSlider = () => {
    const carouselRef = useRef(null);

    return (
        <div className='img-side__main-img'>
            <Carousel 
                itemsToShow={1}
                enableAutoPlay={true} 
                showArrows={false} 
                pagination={false}
                ref={carouselRef}
                autoPlaySpeed={3000}
                onNextEnd={({index}) => {
                    clearTimeout(resetTimeout)
                    if (index + 1 === totalPages) {
                        resetTimeout = setTimeout(() => {
                            carouselRef.current.goTo(0)
                        }, 3000)
                    }
                }}
            >
                {items.map(item => 
                <div key={item.id}>
                    <img src={item.src} alt={item.alt} className='img-side__sub-img'/>
                </div>)}
            </Carousel>
        </div>
    )
}

export default BasicSlider;