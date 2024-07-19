import React from 'react';
import BannerCards from './BannerCards';

const Banner = () => {
  return (
    <div className='banner-container px-4 lg:px-10 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full'>
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Welcome to <span className='text-blue-700'>IIT Dharwad LMS</span>
          </h2>
          <p className="md:w-full font-semibold">
            The Indian Institute of Technology Dharwad (IIT Dharwad) is a premier institution known for its excellence in education, research, and innovation. Our Library Management System (LMS) is designed to provide seamless access to our extensive collection of books, journals, and digital resources, supporting the academic and research needs of our students and faculty.
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
