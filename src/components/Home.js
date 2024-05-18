import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Name:', name);
    console.log('Email:', email);
    // Add your login/register logic here
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
          <h2>HopeHub</h2>
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
      {/* Introduction and Login/Register */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '70px',
        }}
      >
        {/* Introduction */}
        <div style={{ width: '45%' }}>
          <h2>Providing A Gateway To Start Business With Almighty</h2>
          <p>
            Welcome to HopeHub, a platform connecting NGOs and users. Users can
            donate to NGOs, and NGOs can receive support through donations. With
            HopeHub, you can easily give donations as a Doner or look for
            donations as an NGO without worrying about your money going into the
            wrong hands or organization. With proper authentication, you can
            donate for verified NGO's as well as verified users who wants to
            sincerely donate; all in one place.
          </p>
          <img
            src={require('../donation.jpg')}
            alt='home'
            width={300}
            height={200}
          />
        </div>

        {/* Login/Register */}
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginTop: '20px',
            backgroundColor: '#f0f0f0',
          }}
        >
          <div style={{ width: '35%' }}>
            {showLogin ? (
              <div>
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit}>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Username:
                      <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </label>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Password:
                      <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                  </div>
                  <button
                    type='submit'
                    style={{ backgroundColor: 'purple', color: 'white' }}
                  >
                    Login
                  </button>
                </form>
                <p>
                  Don't have an account?{' '}
                  <span
                    onClick={() => setShowLogin(false)}
                    style={{ cursor: 'pointer', color: 'blue' }}
                  >
                    Register here
                  </span>
                </p>
              </div>
            ) : (
              <div style={{ marginTop: '20px' }}>
                <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Name:
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Email:
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Password:
                      <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                  </div>
                  <button
                    type='submit'
                    style={{
                      backgroundColor: 'purple',
                      color: 'white',
                    }}
                  >
                    Register
                  </button>
                </form>
                <p>
                  Already have an account?{' '}
                  <span
                    onClick={() => setShowLogin(true)}
                    style={{ cursor: 'pointer', color: 'blue' }}
                  >
                    Login here
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
