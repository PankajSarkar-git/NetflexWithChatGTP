"use client";

import MainContainer from "@/components/MainContainer/MainContainer";
import Navbar from "@/components/navbar/Navbar";
import useNowPlayingHook from "@/hooks/useNowPlayingMovies";
import usePopularMoviesHook from "@/hooks/usePopularMovies";
import useUpComingMoviesHook from "@/hooks/useUpComingMovies";
import useTopRatedMoviesHook from "@/hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingHook();
  useNowPlayingHook();
  useTopRatedMoviesHook();
  useUpComingMoviesHook();
  usePopularMoviesHook();
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default Browse;
