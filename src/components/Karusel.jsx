import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image1 from '../foto/banner_karusel_1.jpg';
import Image2 from '../foto/banner_karusel_2.jpg';
import Image3 from '../foto/banner_karusel_3.jpg';
import './Karusel.css';

const Karusel = () => {
    return (
        <div className="karusel carousel-container">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    gap: 20,
                    autoplay: {
                        enabled: true,
                        interval: 3000,
                        pauseOnHover: true,
                    },
                    pagination: {
                        type: 'bullets',
                        paginationClass: 'custom-pagination',
                        focus: 'hover',
                    },
                    keyboard: true,
                    drag: true,
                    arrows: false,
                }}
            >
                <SplideSlide>
                    <img src={Image1} alt="Slide 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={Image2} alt="Slide 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={Image3} alt="Slide 3" />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Karusel;
