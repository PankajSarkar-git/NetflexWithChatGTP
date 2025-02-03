"use client";

import { addTopRatedMovies, addUpComingMovies } from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpComingMoviesHook = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      ApiOptions
    );
    const json = await data.json();
    // console.log(json.results, "json.results");
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMoviesHook;
