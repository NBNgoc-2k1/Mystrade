import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../../global_components/ProductCard'
import 'swiper/css';
import './slider.css'
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/navigation";
import TitlePage from '../../../global_components/TitlePage';

const BestSeller = () => {
    return (
        <div className='my-8'>
            <TitlePage title='Best Seller' className='text-3xl lg:text-5xl' />
            <Swiper loop={true}
                slidesPerView={2}
                modules={[Navigation, Autoplay]}
                longSwipesMs={10000}
                navigation={true}
                speed={800}
                longSwipes={false}
                autoplay={{
                    delay: 3000
                }}
                breakpoints={{
                    1536:{
                        slidesPerView:4
                        
                    },
                    1024:{
                        slidesPerView:3
                    }
                }}
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BestSeller
