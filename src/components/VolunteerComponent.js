// VolunteerComponent.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const VolunteerComponent = () => {
  const [volunteerInfo, setVolunteerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVolunteerInfo({
      ...volunteerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the volunteer application (e.g., send data to the server)
    console.log('Volunteer Application Submitted:', volunteerInfo);
    // You can reset the form fields if needed
    setVolunteerInfo({
      name: '',
      email: '',
      phone: '',
      areaOfInterest: '',
      message: '',
    });
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: '#333',
          color: 'white',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo and Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={require('../images.png')}
            alt='Logo'
            style={{ width: '60px', height: '60px', marginRight: '10px' }}
          />
          <h1>HopeHub</h1>
        </div>

        {/* Navigation Links */}
        {/* Navigation Links */}

        <div
          style={{
            display: 'flex',
            gap: '10px',
            color: 'white',
            marginTop: '55px',
          }}
        >
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/achievements' className='nav-link'>
            Achievements
          </Link>
          <Link to='/about' className='nav-link'>
            About Us
          </Link>
          <Link to='/projects' className='nav-link'>
            Projects
          </Link>
          <Link to='/partner' className='nav-link'>
            Partner with us
          </Link>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
          <Link to='/volunteer' className='nav-link'>
            Volunteer
          </Link>
          <Link to='/zakat-calculator' className='nav-link'>
            Zakat Calculator
          </Link>
          <Link to='/FAQ ' className='nav-link'>
            FAQ
          </Link>
        </div>
      </nav>
      <div style={{ marginLeft: '10px' }}>
        <h2>Volunteer Opportunities</h2>
        <p>
          Thank you for considering volunteering with HopeHub! We have various
          opportunities where you can make a positive impact on the community.
          Your time and skills can contribute to the success of our projects and
          initiatives.
        </p>
        <h3>How to Get Involved:</h3>
        <ul>
          <li>
            Explore our ongoing projects and choose the one that aligns with
            your interests.
          </li>
          <li>
            Contact us through the provided channels to express your interest in
            volunteering.
          </li>
          <li>
            Attend orientation sessions to learn more about our organization and
            specific projects.
          </li>
          <li>
            Join our dedicated team of volunteers and start making a difference!
          </li>
        </ul>
      </div>
      <div className='volunteer-container'>
        {/* Volunteer Application Form */}
        <div className='form-box'>
          <h3>Volunteer Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>
                Name:
                <input
                  type='text'
                  name='name'
                  value={volunteerInfo.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Email:
                <input
                  type='email'
                  name='email'
                  value={volunteerInfo.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Phone:
                <input
                  type='tel'
                  name='phone'
                  value={volunteerInfo.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Area of Interest:
                <input
                  type='text'
                  name='areaOfInterest'
                  value={volunteerInfo.areaOfInterest}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Message:
                <textarea
                  name='message'
                  value={volunteerInfo.message}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type='submit'>Submit Application</button>
          </form>
        </div>

        {/* Image */}
        <div className='image-box'>
          <img src={require('../volunt.jpg')} alt='Volunteer Image' />
        </div>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <p>
          If you have any questions or need more information, please feel free
          to reach out to us. We look forward to having you as part of our
          volunteer community!
        </p>
      </div>
    </div>
  );
};

export default VolunteerComponent;
