import React from 'react'
import Banner from './Banner';
import About_Us from './About_Us';
import Puja from './Puja';
// import Testimonials from './Testimonials';
import './Home_Main.css';
import Form from '../Contact/Form';
import Img4 from './Img4';
import HomeGetTouch from './HomeGetTouch';
import BlogSlider from './BlogSlider';
import DevoteesSlider from './DevoteesSlider';
import LaunchingTemple from './LaunchingTemple';

const Home_Main = () => {
    return (
        <>
            <Banner/>
            <About_Us/>
            <LaunchingTemple/>
            <Puja/>
            <DevoteesSlider/>
            <BlogSlider/>
            <Form/>
            <Img4/>
            <HomeGetTouch/>
        </>
    )
}

export default Home_Main;