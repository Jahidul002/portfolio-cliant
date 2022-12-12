import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import photo from '../utilities/Untitled-1.png'
import '../Css/button.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ref = React.createRef();

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div className='md:grid grid-cols-5 flex flex-col-reverse'>
                <div className='col-span-3 flex justify-center items-center'>
                    <div>
                        <h1 className='text-4xl'><span>Hello</span>!!<span className='font-bold text-5xl'>Wellcome</span>!</h1><br />
                        <div className='flex text-3xl'>
                            <h1 className='mx-2 font-extrabold text-[#944b0a]'>I'm </h1>
                            <div className=' text-[#34786c] font-bold'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Jahidul Islam Emon_',
                                            'a Front End Developer_',
                                            'a daily learner_',
                                            'a web developer_'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <br />
                            <br />
                        </div>
                        <a className='cusBTN border-emerald-700 px-3 text-xl py-1' href="resume.pdf" download="resumeOFJAhidulIslam.pdf">Download Resume</a>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div>
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;