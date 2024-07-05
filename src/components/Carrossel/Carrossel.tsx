import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import * as styled from './Carrossel.styles'; 

function Carrossel() {
    return (
        <styled.Container>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="carrossel"
            >
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-content">
                        <img src="./Carousel3.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* Adicione mais SwiperSlides conforme necessário */}
            </Swiper>
        </styled.Container>
    );
};

export default Carrossel;
