import React from 'react';
import './bgimg.css';
import CoderMan from '../../assets/background/coder1.png';

const BgImg = () => {
    return (
        <section>
            <div className='imgDiv'>
                <img src={CoderMan} className='img' />
            </div>
        </section>
    );
};

export default BgImg;
