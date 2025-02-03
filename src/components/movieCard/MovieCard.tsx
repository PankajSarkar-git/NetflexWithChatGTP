import { IMG_CDN_URL } from '@/utils/constnat'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({ data }: any) => {
    const { poster_path, original_title, overview, release_date, title } = data
    return (
        <div className='w-56 rounded-xl overflow-hidden bg-slate-700 '>
            <Image
                src={`${IMG_CDN_URL}${poster_path}`}
                alt={title}
                layout="responsive"
                width={500} // Native width of the image
                height={750} // Native height of the image
                className="h-fit w-full object-cover "
            />
            <div className="p-2 ">
                <h3 className='text-white text-2xl mb-1 font-bold'>{title.slice(0, 14).trim()}{title.length > 14 && '..'}</h3>
                <h3 className='text-white text-sm '>Release Date: {release_date}</h3>
            </div>

        </div>
    )
}

export default MovieCard