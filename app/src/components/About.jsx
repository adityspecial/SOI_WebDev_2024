import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Team from "./Team"
import AboutCard from "./AboutCard"
import Footer from './Footer';
import aditya from "../assets/Aditya.jpg"
import harsh from "../assets/Harsh.jpg"
import samartha from "../assets/Samartha.jpg"
import vidit from "../assets/vidit.png"
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We're on a mission to make <span className="text-blue-600">building better UIs effortless</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease.
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={aditya} alt="Team meeting" />
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={harsh} alt="Team outing" />
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={samartha} alt="Team event" />
            </div>  
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img className="w-full" src={vidit} alt="Team event" />
            </div>      
          </Slider>
        </div>
        <div className="mt-10 text-center">
          <div className="flex justify-center space-x-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">2024</h3>
              <p className="text-gray-500">The starting year</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-500">Remote global team</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-500">Countries represented</p>
            </div>
          </div>
        </div>
      </div>
        <AboutCard/>
        <Footer/>
    </div>
  
    
  );
};

export default About;

