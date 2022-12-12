import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/button.css'

const Navber = () => {
    return (
        <div>
            <nav>
                <div className="navbar navMod">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link className='about my-1 px-2 py-1' to="">Home</Link>
                                <Link className='about my-1 px-2 py-1' to="/blog">Blog</Link>
                            </ul>
                        </div>
                        <Link to="/" className='text-black'>LOGO</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Link className='about px-2 py-1 mx-2' to="">Home</Link>
                            <Link className='about px-2 py-1 mx-2' to="/blog">Blog</Link>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className='cusBTN border-emerald-700 px-3 text-xl py-1' href="resume.pdf" download="resumeOFJAhidulIslam.pdf">Download Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;