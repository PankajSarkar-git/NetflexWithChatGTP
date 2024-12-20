import React from "react";

const VideoInfo = ({
  original_title,
  overview,
}: {
  original_title: string;
  overview: string;
}) => {
  return (
    <div className="absolute bg-gradient-to-r from-black w-screen aspect-video">
      <div className="pt-[20%] px-20">
        <div className="w-96">
          <h1 className="text-3xl font-bold text-white mb-4">
            {original_title}
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">{overview}</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-14 py-2 bg-red-600 opacity-50 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300">
            Play
          </button>
          <button className="px-14 opacity-50 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-300">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
