"use client";

import { addMovieDetails } from "@/store/moviesSlice";
import { ApiOptions } from "@/utils/constnat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMovieDetails = (movie_id: string) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      ApiOptions
    );
    const json = await data.json();
    // console.log(json, "json.results");
    dispatch(addMovieDetails(json));
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
