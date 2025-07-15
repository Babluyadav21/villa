import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import Banner from '../Banner/Banner';
import bannerImage from '../../assets/images/banner.jpg';
import Feature from '../Feature/Feature';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services'
import  Gallery from '../Gallery/Gallery'
import  Contact from '../Contact/Contact';



function Home() {
    return (
        <>
            <Banner firstHeadingCssClasses="!text-white" imgurl={bannerImage} firstHeading="Hurry!" secondHeading="Get the Best Villa for you" paragraph="Nestled in the heart of a serene countryside, this luxurious villa blends timeless architecture with modern comforts. Surrounded by lush gardens and panoramic views, it offers spacious living areas, high ceilings, and large windows that flood the rooms with natural light. Whether you're relaxing by the private pool or enjoying an evening on the terrace, this villa provides the perfect setting for a peaceful and elegant lifestyle." btnText="Book Now" />

            <About />
            <Blogs/>
            <Services/>
            <Feature />
            <Gallery/>
            <Contact/>
            


        </>
    )
}

export default Home
