import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as styled from './Carrossel.styles'; 

function Carrossel() {
    return (
        <styled.Container>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="carrossel"
            >
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel1.png" alt="Carousel 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel2.png" alt="Carousel 2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel3.png" alt="Carousel 3" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </styled.Container>
    );
};

export default Carrossel;
