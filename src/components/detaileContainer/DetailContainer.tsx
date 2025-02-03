import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import CastList from '../castList/CastList';

const DetailContainer = () => {
  const movies = useSelector((store: any) => store.movies)
  console.log(movies, "movies");
  return (
    <div className="relative z-10 -mt-52 px-12 bg-transparent pb-10">
      <CastList title={"Casting"} castData={movies?.movieCredits?.cast} />
      <MovieList title={"Similar Movies"} nowMoviesData={movies?.similarMovie} />
    </div>
  )
}

export default DetailContainer