import React from 'react';
import HeroSection from '../components/Hero';
import Products from '../components/Product';
import Services from '../components/Services';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <Products />
        </>
    )
};

export default Home;
