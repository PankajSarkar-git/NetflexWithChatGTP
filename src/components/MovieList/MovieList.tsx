import React from "react";
import MovieCard from "../movieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const MovieList = ({ title, nowMoviesData }: { title: string; nowMoviesData: any[] }) => {
  console.log(nowMoviesData, "Movie.nowPlaying");

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
        {nowMoviesData && nowMoviesData.map((movieItem: any) => (
          <SwiperSlide key={movieItem.id}>
            <Link href={`/movie/[id]`} as={`/movie/${movieItem.id}`}>
              <MovieCard data={movieItem} />
            </Link>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
};

export default MovieList;

