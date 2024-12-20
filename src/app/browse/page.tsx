"use client";

import MainContainer from "@/components/MainContainer/MainContainer";
import Navbar from "@/components/navbar/Navbar";
import useNowPlayingHook from "@/hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingHook();
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default Browse;
