import useGetMovieVideoHook from "@/hooks/useMovieVideo";
import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }: { movieId: number }) => {
  useGetMovieVideoHook(movieId);

  const trailer = useSelector((store: any) => store?.movies?.trailerVideo);

  return (
    <div className="w-screen aspect-video">
      {trailer?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-screen aspect-video bg-[#353434]"></div>
      )}
    </div>
  );
};

export default VideoBackground;
