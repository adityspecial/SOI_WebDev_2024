import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div className='mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/">
            <div className="card--display">
              <i className="material-icons">college</i>
              <h2>About IIT Dharwad</h2>
            </div>
            <div className="card--hover">
              <h2>About IIT Dharwad</h2>
              <p>Indian Institute of Technology Dharwad (IIT Dharwad) is an autonomous premier engineering and technology university located in Dharwad, Karnataka, India.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/knowledge-resource-and-information-library">
            <div className="card--display">
              <i className="material-icons">book</i>
              <h2>Academics</h2>
            </div>
            <div className="card--hover">
              <h2>Academics</h2>
              <p>IIT Dharwad offers a variety of undergraduate, postgraduate, and doctoral programs in engineering and technology disciplines.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/facilities">
            <div className="card--display">
              <i className="material-icons">science</i>
              <h2>Research</h2>
            </div>
            <div className="card--hover">
              <h2>Research</h2>
              <p>IIT Dharwad focuses on cutting-edge research in various fields of science and engineering, promoting innovation and entrepreneurship.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/iit-dharwad#video-block">
            <div className="card--display">
              <i className="material-icons">location</i>
              <h2>Campus</h2>
            </div>
            <div className="card--hover">
              <h2>Campus</h2>
              <p>The IIT Dharwad campus is designed to be a green and sustainable environment, providing students with state-of-the-art facilities and amenities.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/career">
            <div className="card--display">
              <i className="material-icons">work</i>
              <h2>Careers</h2>
            </div>
            <div className="card--hover">
              <h2>Careers</h2>
              <p>IIT Dharwad provides numerous career opportunities for students and professionals, fostering growth and development in various fields.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.iitdh.ac.in/studenthighlights">
            <div className="card--display">
              <i className="material-icons">people</i>
              <h2>Student Life</h2>
            </div>
            <div className="card--hover">
              <h2>Student Life</h2>
              <p>Life at IIT Dharwad is vibrant and diverse, offering students numerous extracurricular activities and opportunities for personal growth.</p>
              <p className="link">Click to see more</p>
            </div>
          </a>
          <div className="card--border"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
