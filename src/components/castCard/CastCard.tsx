import { IMG_CDN_URL } from '@/utils/constnat'
import Image from 'next/image'
import React from 'react'

const CastCard = ({ data }: any) => {
    const { name, profile_path } = data
    return (
        <div className='w-56 rounded-xl overflow-hidden bg-slate-700 '>
            <Image
                src={profile_path ? `${IMG_CDN_URL}${profile_path}` : `/images/images.png`}
                alt={name}
                layout="responsive"
                width={500} // Native width of the image
                height={750} // Native height of the image
                className="h-fit w-full object-cover min-h-[338px] "
            />
            <div className="p-2 ">
                <h3 className='text-white text-2xl mb-1 font-bold'>{name.slice(0, 14).trim()}{name.length > 14 && '..'}</h3>
            </div>

        </div>
    )
}

export default CastCard