import React from 'react';
import { Link } from 'react-router-dom';

const mapProject = ({ data }) => {
    // console.log(data);
    return (
        <div className="card h-96 cardMod shadow-xl">
            <figure className="px-5 pt-10">
                <img src={data.pic} alt="Shoes" className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-black">{data.name}</h2>
                <div className="card-actions">
                    <Link to={`/details/${data._id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default mapProject;