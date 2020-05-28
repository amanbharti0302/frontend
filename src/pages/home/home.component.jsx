import React from 'react';
import './home.styles.scss';

import  img1  from '../../assets/line-follower.png';

const Homepage = ()=>(
    <div className="section-homepage">
        <div className="home-info">
            <div className="home-info-left">
            <p className="home-info-p">this is the best place to enhance your practical knowledge</p>
            </div>
            <img src={img1} alt="image1" className="home-info-img"></img>
            
        </div>
    </div>
)

export default Homepage;