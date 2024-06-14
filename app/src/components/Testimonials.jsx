// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'User 1', feedback: 'Great selection of books and excellent service!' },
    { name: 'User 2', feedback: 'A wonderful place to find rare books.' },
    { name: 'User 3', feedback: 'Friendly staff and a comfortable reading environment.' },
  ];

  return (
    <div className="testimonials">
    <div className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
                 
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-lg text-gray-900 dark:text-white mb-4">{testimonial.feedback}</p>
              <p className="text-gray-700 dark:text-gray-300">- {testimonial.name}</p>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
