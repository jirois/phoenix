import React from 'react';
import Hero from '../components/carousel/Hero'


function HomeScreen(props) {
    return (
        <div className="home">
             <Hero />
            <main className="main-bg" >
            <div className="home-btn-container">
                <a href="/brooker" className="btn btn-lg">our recommended Brokers</a>
                <a href="/telegram" className="btn btn-lg">Join our free telegram</a>
            </div>
            </main>
        </div>
    );
}

export default HomeScreen;