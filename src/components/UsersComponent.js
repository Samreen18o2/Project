import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UsersComponent = () => {
  const navigate = useNavigate();

  const handleDonateNow = () => {
    // Redirect to the DonationFormComponent
    navigate('/donate');
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
      {/* Achievements */}
      <div style={{ textAlign: 'center', marginTop: '70px' }}>
        <h2>Our Achievements</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            backgroundColor: '#f0f0f0',
          }}
        >
          {/* Add image */}
          <img
            src={require('../iiimages.jpg')}
            alt='Achievement Image'
            style={{ width: '250px', marginRight: '20px' }}
          />
          {/* Add text */}
          <div>
            <p>
              Over the years, HopeHub has achieved significant milestones in our
              mission to make a positive impact on humanity.
            </p>
            <p>
              Facilitated donations from thousands of generous individuals,
              enabling us to support various causes and initiatives globally.
            </p>
            <p>
              Supported hundreds of NGOs worldwide, connecting them with donors
              who believe in their missions and projects.
            </p>
            <p>
              Ensured transparent and accountable use of funds, providing our
              donors with the confidence that their contributions are making a
              real difference.
            </p>
            <p>
              Empowered communities through sustainable projects, focusing on
              long-term solutions to address critical issues and improve lives.
            </p>
          </div>
        </div>
      </div>

      {/* Images demonstrating website functionality */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>See HopeHub in Action</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Add images or screenshots demonstrating the website's functionality */}
          <img
            src={require('../download.jpg')}
            alt='image'
            style={{ width: '300px', margin: '10px' }}
          />
          <img
            src={require('../imagese.jpg')}
            alt='Image 2'
            style={{ width: '300px', margin: '2px' }}
          />
          <img
            src={require('../downloads.jpg')}
            alt='Image 3'
            style={{ width: '300px', margin: '2px' }}
          />
        </div>
      </div>
      {/* Donate Now Button */}
      <button
        onClick={handleDonateNow}
        style={{
          fontSize: '18px',
          padding: '10px 20px',
          backgroundColor: '#709090',
          color: '#black',
          border: '20px',
          borderRadius: '5px',
          marginBottom: '10px',
          marginLeft: '10px',
        }}
      >
        Donate Now
      </button>
    </div>
  );
};

export default UsersComponent;
