// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Mystery', 'Science', 'Biographies'];

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-800" data-aos="fade-left">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 px-6 py-3 rounded-lg shadow-lg" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-900 dark:text-white">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
