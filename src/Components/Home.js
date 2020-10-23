import React from 'react';
import '../Styles/Home.css';
import TopNavbar from './Navbar';
import Footer from './Footer';
import Row1 from './Row1';
import Row2 from '../Assets/Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import HowItWorks from './How_It_Works';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <>
            <div className="maindiv">
                <TopNavbar />
                <div className="background-img">
                    <Row1 />
                </div>
                <Row2 />
                <Row3 />
                <Row4 />
                <HowItWorks />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}

export default Home;
