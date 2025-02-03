import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoBackground from "../VideoBackground/VideoBackground";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

const MainContainer = () => {
  const movies = useSelector((store: any) => store?.movies?.nowPlayingMovies);

  // Generate a random index only once when the component mounts
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setRandomIndex(Math.floor(Math.random() * movies.length));
    }
  }, [movies]);

  // Wait until the randomIndex is set
  if (randomIndex === null || !movies) return null;

  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <div className="">
        <VideoInfo original_title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
      <div className="">
        <MoviesContainer />
      </div>
    </div>
  );
};

export default MainContainer;
