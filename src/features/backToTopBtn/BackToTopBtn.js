import React, { useState, useEffect } from 'react';
import './backtotopbtn.css';
import Icon from '@reacticons/bootstrap-icons';

const BackToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 500; 

            setShowButton(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            className={`back-to-top-btn ${showButton ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <Icon name='arrow-up' />
        </a>
    );
};

export default BackToTopBtn;
