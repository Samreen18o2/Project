import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div>
      {' '}
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        {/* Contact Section */}
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          {/* Contact Form */}
          <div style={{ width: '50%' }}>
            <h1>Leave Your Message</h1>
            <form onSubmit={handleFormSubmit}>
              <div style={{ marginBottom: '30px' }}>
                <label>
                  Name:
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label>
                  Email:
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginBottom: '40px' }}>
                <label>
                  Message:
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>

          {/* Image */}
          <div style={{ width: '50%' }}>
            <img
              src={require('../contacs.jpg')}
              alt='Contact Image'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
