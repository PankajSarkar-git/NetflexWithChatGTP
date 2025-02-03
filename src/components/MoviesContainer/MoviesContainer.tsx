import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store: any) => store.movies)
  console.log(movies, "movies");


  return <div className="relative z-10 -mt-52 px-12 bg-transparent pb-10">
    <MovieList title={"Now Playing Movies"} nowMoviesData={movies?.nowPlayingMovies} />
    <MovieList title={"Top Rated Movies"} nowMoviesData={movies?.topRatedMovies} />
    <MovieList title={"Popular Movies"} nowMoviesData={movies?.nowPlayingMovies} />
    <MovieList title={"Up Coming Movies"} nowMoviesData={movies?.upComingMovies} />
  </div>;
};

export default MoviesContainer;
