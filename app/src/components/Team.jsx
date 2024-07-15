import React from 'react';
import aditya from "../assets/Aditya.jpg"
import harsh from "../assets/Harsh.jpg"
import samartha from "../assets/Samartha.jpg"
import vidit from "../assets/vidit.png"
const teamMembers = [
  {
    name: 'Aditya',
    role: 'Co-founder, CEO',
    description: 'Exercise addict and lifelong learner',
    imgSrc: aditya,
    countryFlag: '🇮🇳',
  },
  {
    name: 'Harsh',
    role: 'Co-founder, Head of Sales',
    description: "When I'm not 👨‍💻, I'm 🏋️",
    imgSrc: harsh,
    countryFlag: '🇮🇳',
  },
  {
    name: 'Samartha',
    role: 'Engineering Manager - Core',
    description: 'I do karate 🥋 and read 📚. A lot!',
    imgSrc: samartha,
    countryFlag: '🇮🇳',
  },
  {
    name: 'Vidit',
    role: 'Engineering Manager - Core',
    description: 'I do karate 🥋 and read 📚. A lot!',
    imgSrc: vidit,
    countryFlag: '🇮🇳',
  },
];

const Team = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the <span className="text-blue-600">Team</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Contributing from all corners of the world, we are a global, fully-remote team & community.
          </p>
        
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src={member.imgSrc} alt={member.name} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.role}</p>
              <p className="mt-2 text-gray-500">{member.description}</p>
              <div className="mt-4 flex justify-center">
                <span className="text-2xl">{member.countryFlag}</span>
                <a href="#" className="ml-2 text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0.5C5.735 0.5 0.5 5.735 0.5 12C0.5 17.87 4.5 22.735 9.83 23.475C10.48 23.55 10.745 23.19 10.745 22.89C10.745 22.64 10.735 21.93 10.735 21.115C7.11 21.805 6.305 19.635 6.305 19.635C5.805 18.365 5.03 18.005 5.03 18.005C3.96 17.335 5.095 17.345 5.095 17.345C6.255 17.415 6.84 18.575 6.84 18.575C7.87 20.155 9.425 19.7 10.015 19.4C10.105 18.615 10.415 18.09 10.755 17.78C7.805 17.45 4.755 16.36 4.755 11.675C4.755 10.35 5.205 9.31 5.925 8.515C5.815 8.215 5.445 6.935 6.025 5.31C6.025 5.31 6.88 5.01 10.735 6.78C11.765 6.495 12.855 6.35 13.945 6.35C15.035 6.35 16.125 6.495 17.155 6.78C20.995 5.01 21.845 5.31 21.845 5.31C22.425 6.935 22.055 8.215 21.945 8.515C22.665 9.31 23.115 10.35 23.115 11.675C23.115 16.375 20.055 17.44 17.085 17.765C17.515 18.155 17.915 19.055 17.915 20.435C17.915 22.425 17.895 23.485 17.895 23.89C17.895 24.195 18.16 24.56 18.82 24.475C24.15 22.725 28.15 17.87 28.15 12C28.15 5.735 22.915 0.5 16.65 0.5H12Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
