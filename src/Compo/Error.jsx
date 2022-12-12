import React from 'react';
import error from '../utilities/error.gif'
const Error = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default Error;