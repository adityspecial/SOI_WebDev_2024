import React from 'react';
import aditya from "../assets/Aditya.jpg";
import harsh from "../assets/Harsh.jpg";
import samartha from "../assets/Samartha.jpg";
import vidit from "../assets/vidit.png";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <div className=' hello mx-auto py-8 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-1 gap-4'>
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: `url(${aditya})` }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Aditya</h3>
              <p>Co-founder, CEO</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: `url(${harsh})` }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Harsh</h3>
              <p>Co-founder, Head of Sales</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{ backgroundImage: `url(${samartha})` }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Samartha</h3>
              <p>Engineering Manager - Core</p>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
            </div>
          </div>
          <div className="flip-box-back text-center" style={{ backgroundImage: `url(${vidit})` }}>
            <div className="inner color-white">
              <h3 className="flip-box-header">Vidit</h3>
              <p>Engineering Manager - Core</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default AboutCard;
