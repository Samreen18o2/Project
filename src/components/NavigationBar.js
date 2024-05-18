// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
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
      <div
        style={{
          display: 'flex',
          gap: '20px',
          color: 'white',
          marginTop: '50px',
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
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
        <Link to='/zakat-calculator' className='nav-link'>
          Zakat Calculator
        </Link>
        <Link to='/FAQ' className='nav-link'>
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
