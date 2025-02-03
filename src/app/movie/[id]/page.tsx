"use client"
import DetailContainer from '@/components/detaileContainer/DetailContainer'
import VideoBackground from '@/components/VideoBackground/VideoBackground'
import VideoInfo from '@/components/VideoInfo/VideoInfo'
import useMovieCreditsHook from '@/hooks/useMovieCredits'
import useMovieDetails from '@/hooks/useMovieDetails'
import useSimilarMoviesHook from '@/hooks/useSimilarMovies'
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const { id } = useParams()
    useMovieDetails(typeof (id) === 'string' ? id : " ")
    useSimilarMoviesHook(typeof (id) === 'string' ? id : " ");
    useMovieCreditsHook(typeof (id) === 'string' ? id : " ");
    const movieDetails = useSelector((store: any) => store?.movies?.
        movieDetails);
    console.log(movieDetails);

    return (
        <div className="bg-black">
            {movieDetails && <div className="">
                <VideoInfo original_title={movieDetails?.title} overview={movieDetails?.overview} />
                <VideoBackground movieId={movieDetails?.id} />
            </div>}
            <div className="">
                <DetailContainer />
            </div>
        </div>
    )
}

export default page