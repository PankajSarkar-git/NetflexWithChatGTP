import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CastCard from '../castCard/CastCard'

const CastList = ({ title, castData }: any) => {
    console.log(castData,"castData");
    
    return (
        <section aria-label={title} className="mx-4 my-4">
            <h1 className="text-white text-3xl my-6">{title}</h1>
            <Swiper
                aria-label="Movie carousel"
                spaceBetween={16}
                slidesPerView={6}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 6, spaceBetween: 30 },
                }}
            >
                {castData && castData.map((castItem: any) => (
                    <SwiperSlide key={castItem.id}>
                        <CastCard data={castItem} />
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    )
}

export default CastList