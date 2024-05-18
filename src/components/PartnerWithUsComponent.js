// PartnerWithUsComponent.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const PartnerWithUsComponent = () => {
  const [partnerInfo, setPartnerInfo] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartnerInfo({
      ...partnerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the partnership application (e.g., send data to the server)
    console.log('Partnership Application Submitted:', partnerInfo);
    // You can reset the form fields if needed
    setPartnerInfo({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
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
        <h2>Partner with Us</h2>
        <p>
          NGOs interested in partnering with HopeHub can fill out our
          partnership application form. We will review your application and get
          in touch with you.
        </p>
      </div>
      <div className='partner-container'>
        {/* Partnership Application Form Container */}
        <div className='partner-form-container'>
          <h3>Partnership Application Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>
                Organization Name:
                <input
                  type='text'
                  name='organizationName'
                  value={partnerInfo.organizationName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Contact Person:
                <input
                  type='text'
                  name='contactPerson'
                  value={partnerInfo.contactPerson}
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
                  value={partnerInfo.email}
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
                  value={partnerInfo.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Message:
                <textarea
                  name='message'
                  value={partnerInfo.message}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type='submit'>Submit Application</button>
          </form>
        </div>

        {/* Image */}
        <div className='partner-image-container'>
          <img src={require('../imagesjoin.jpg')} alt='Partner Image' />
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsComponent;
