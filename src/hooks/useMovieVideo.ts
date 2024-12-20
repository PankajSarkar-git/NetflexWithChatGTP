"use client";
import { ApiOptions } from "@/utils/constnat";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "@/store/moviesSlice";

const useGetMovieVideoHook = (movie_id: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      ApiOptions
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video: any) => video.type == "Trailer"
    );

    dispatch(
      addTrailerVideo(filterData.length ? filterData[0] : json.results[0])
    );
  };
};

export default useGetMovieVideoHook;
