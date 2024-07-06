import React from 'react';
import BannerCards from './BannerCards';

const Banner = () => {
  return (
    <div className='banner-container px-4 lg:px-10 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full'>
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Welcome to <span className='text-blue-700'>IIT dholakpur LMS</span>
          </h2>
          <p className="md:w-full font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel esse sit error quia cupiditate, aspernatur eos est numquam rerum, ex quidem? Quam deleniti, ea maxime nihil voluptatem dignissimos corporis! Rem!
          </p>
        </div>
        <div className='md:w-1/2'>
          <BannerCards/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
