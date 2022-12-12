import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import MyProject from './MyProject';
import Processbar from './Processbar';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Processbar></Processbar>
            {/* <MyProject></MyProject> */}
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;