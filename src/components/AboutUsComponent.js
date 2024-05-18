import React from 'react';
import { Link } from 'react-router-dom';
const AboutUsComponent = () => {
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
      {/* About Us Section with Image */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          padding: '20px',
        }}
      >
        {/* Add image */}
        <img
          src={require('../immages.jpg')}
          alt='About Us Image'
          style={{ width: '300px', marginRight: '20px' }}
        />
        {/* Add text */}
        <div>
          <h2>About Us</h2>
          <p>
            Welcome to HopeHub, where we are dedicated to making a positive
            impact on the world by connecting users and NGOs. Our mission is to
            facilitate the seamless flow of donations, providing essential
            support to those in need.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>How HopeHub Works</h2>
        <p>
          HopeHub operates on a simple and effective model to connect users with
          NGOs and streamline the donation process:
        </p>
        <p>
          Users can easily browse through a variety of NGOs and their projects
          listed on our platform.
        </p>

        <p>
          Choose a cause that resonates with you and make a donation securely
          through our user-friendly interface.
        </p>
        <p>
          Track the impact of your donations in real-time, receiving updates on
          how your contribution is making a difference.
        </p>
        <p>
          NGOs benefit from increased visibility, access to a diverse donor
          community, and automated processes to streamline their operations.
        </p>
      </div>

      {/* Benefits for Users Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>How HopeHub works for Users</h2>
        <p>
          By using HopeHub, users experience a range of benefits, including an
          effortless and secure donation process, transparent tracking of
          donations and impact, the ability to support causes aligned with
          personal values, regular updates on project outcomes and success
          stories, and a direct contribution to the betterment of humanity.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {/* Add image for NGOs section */}
        <img
          src={require('../imageses.jpg')}
          alt='NGO Image'
          style={{ width: '200px', height: '170px', marginRight: '20px' }}
        />
        {/* Add content for NGOs section */}
        <div style={{ textAlign: 'left' }}>
          <h2>How HopeHub works for NGOs</h2>
          <p>
            NGOs partnering with HopeHub enjoy various advantages, such as
            access to a diverse and engaged donor community, reduced
            administrative burden through automated processes, increased
            visibility and credibility through our platform, an opportunity to
            showcase impactful projects and success stories, and collaboration
            for the greater good of humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
