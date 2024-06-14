// src/components/LatestArrivals.jsx
import React from 'react';
import Slider from "react-slick";

const LatestArrivals = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', image: 'link-to-image-1' },
    { title: 'Book 2', author: 'Author 2', image: 'link-to-image-2' },
    { title: 'Book 3', author: 'Author 3', image: 'link-to-image-3' },
    { title: 'Book 5', author: 'Author 1', image: 'link-to-image-1' },
    { title: 'Book 6', author: 'Author 2', image: 'link-to-image-2' },
    { title: 'Book 7', author: 'Author 3', image: 'link-to-image-3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Arrivals</h2>
        <Slider {...settings}>
          {books.map((book, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{book.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{book.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestArrivals;
