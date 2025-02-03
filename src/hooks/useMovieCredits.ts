"use client";

import { addMovieCredits } from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMovieCreditsHook = (movie_id: string) => {
  const dispatch = useDispatch();
  const getMovieCredits = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      ApiOptions
    );
    const json = await data.json();
    console.log(json, "json cast");
    dispatch(addMovieCredits(json));
  };
  useEffect(() => {
    getMovieCredits();
  }, []);
};

export default useMovieCreditsHook;
