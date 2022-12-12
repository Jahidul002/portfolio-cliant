import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/button.css'



const Processbar = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (
        <div className='container'>
            <h1 data-aos="fade-down" className='text-2xl font-semibold text-green-700 my-5'>My Skills</h1>

            <div className='md:grid grid-cols-5 gap-10 flex flex-col-reverse justify-center items-end'>
                <div className='col-span-2 flex flex-col justify-end md:items-end'>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>HTML</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>CSS</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>TAILWIND</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>BOOSTRAP</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>JAVASCRIPT</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>REACT</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-right">
                        <label><span className='text-2xl text-red-700 font-bold'>MONGODB</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                    <div data-aos="fade-down-right">
                        <label><span className='text-2xl text-red-700 font-bold'>FIREBASE</span>
                            <progress className="progress bg-[#fc1303] w-56 my-1" value="70" max="100"></progress>
                        </label>
                    </div>
                </div>
                <div className='col-span-3 flex justify-center items-center' data-aos="fade-left">
                    <h1 className='about p-5 text-xl'> <span className='text-3xl font-semibold'>WHY HIRE ME FOR
                        YOUR ORGANIZATION</span> <br /><br />
                        I am a Front-end Web developer who learned and was certified by Programming Hero. I have done many full-stack projects with React and Node js. My work experience and skills make me a great match for your job
                    </h1>

                </div>
            </div>
        </div>
    );
};

export default Processbar;