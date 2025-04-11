// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/faqs">FAQs</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
