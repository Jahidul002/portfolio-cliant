import React, { useEffect, useState } from 'react';
import MapProject from '../Compo/MapProject'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Project = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alldata')
            .then(res => res.json())
            .then(dataa => {
                console.log(dataa);
                setData(dataa)
            })

    }, [])

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
        <div className='my-10'>
            <Slider {...settings}>
                {
                    data.map(dt => <MapProject key={dt.id} data={dt}></MapProject>)
                }
            </Slider>
        </div>
    );
};

export default Project;