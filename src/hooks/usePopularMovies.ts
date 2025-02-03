"use client";

import { addPopularMovies } from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePopularMoviesHook = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      ApiOptions
    );
    const json = await data.json();
    console.log(json.results, "json.results");
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMoviesHook;
