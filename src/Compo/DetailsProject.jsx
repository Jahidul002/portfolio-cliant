import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsProject = () => {
    const data = useLoaderData()
    return (
        <div className='flex flex-col justify-center items-center my-10 container mx-auto'>
            <div>
                <img className='w-60' src={data.pic} alt="" />
            </div>
            <div className='border-b-4 border-b-emerald-800 '>
                <h1 className='text-xl text-black'>Site Name:<span className='text-orange-700'>{data.name}</span> </h1>
                <h1 className='text-xl text-black'>Tools Uses:<span className='text-orange-700'>{data.tools}</span> </h1>
            </div>
            <h1 className='text-xl text-black'>Details:<span className='text-orange-700'>{data.details}</span></h1>
            <div className='flex'>
                <a className='mx-2 px-2 py-1 btn btn-outline rounded-full text-black' href={data.git[0]}>Source Code</a>
                <a className='mx-2 px-2 py-1 btn btn-outline rounded-full text-black' href={data.git[1]}>Server Code</a>
                <a className='mx-2 px-2 py-1 btn btn-outline rounded-full text-black' href={data.live}>Live site</a>
            </div>
        </div>
    );
};

export default DetailsProject;