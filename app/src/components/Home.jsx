import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import LatestArrivals from './LatestArrivals';
import Categories from './Categories';
import Testimonials from "./Testimonials";
import Footer from '../components/Footer';
import "./Home.css"
const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <SearchBar />
      <LatestArrivals />
      <Categories />
      <Testimonials />
       <Footer />
    </div>
     
    
  );
};

export default Home;