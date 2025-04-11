// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home">
            <section className="intro">
                <h1>Revolutionizing Package Tracking</h1>
                <p>At SpyNut, we have created a groundbreaking concept product - a styrofoam packaging peanut with embedded technology to track packages with unparalleled accuracy.</p>
                <button>Explore Now</button>
            </section>
            <section className="features">
                <h2>Unveiling the Cutting-Edge</h2>
                <p>Prepare to be amazed as you delve into the inner workings of our revolutionary styrofoam peanut. From cutting-edge sensors to seamless connectivity.</p>
                <button>Learn More</button>
            </section>
        </div>
    );
}

export default HomePage;
