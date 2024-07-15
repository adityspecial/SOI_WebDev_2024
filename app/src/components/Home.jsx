
import React from 'react';
import "./Home.css"
import Banner from './Banner';
import Cards from './Cards';
import Footer from './Footer';
import LibraryResources from './LibraryResources';
const Home = () => {
  return (
    <div className="pt-18">
      <Banner/>
      <Cards/>
      <LibraryResources/>
      <Footer/>
      
    </div>
  );
};

export default Home;
   