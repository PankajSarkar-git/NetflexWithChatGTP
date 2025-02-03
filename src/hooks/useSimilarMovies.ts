"use client";

import {
  addSimilarMovie,
  addTopRatedMovies,
  addUpComingMovies,
} from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useSimilarMoviesHook = (movie_id: any) => {
  const dispatch = useDispatch();
  const getSimilarMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`,
      ApiOptions
    );
    const json = await data.json();
    // console.log(json.results, "useSimilarMoviesHook json.results");
    dispatch(addSimilarMovie(json.results));
  };
  useEffect(() => {
    getSimilarMovies();
  }, []);
};

export default useSimilarMoviesHook;
