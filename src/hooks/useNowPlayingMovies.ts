"use client";

import { addNowPlayingMovies } from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-IN&with_original_language=hi&region=IN&page=1",
      ApiOptions
    );
    const json = await data.json();
    console.log(json.results, "json.results");
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingHook;
