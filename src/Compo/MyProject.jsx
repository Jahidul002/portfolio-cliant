import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fakedata } from '../Fakedata/Data';
import '../Css/button.css'


const MyProject = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='my-20 container mx-auto'>
            <h1 className='my-3 text-5xl font-bold text-[#8a7e5c] text-center'>MY PROJECTS</h1>
            <Slider {...settings} className="cardMod ">
                {fakedata.map(dt =>
                    <div className="card mx-3 shadow-xl">
                        <figure><img className='h-52 p-2 rounded' src={dt.pic} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-black font-semibold">{dt.name}</h2>
                            <p className='text-black font-semibold'>Tools:<small className='text-red-500'>{dt.tools}</small></p>
                            <div className="card-actions justify-end">
                                <a href={dt.live} className="btn btn-primary">Visit site</a>
                            </div>
                        </div>
                    </div>)}
            </Slider>
        </div >
    );
};

export default MyProject;