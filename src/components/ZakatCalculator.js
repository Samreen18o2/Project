import React, { useState } from 'react';
import './ZakatCalculator.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const ZakatCalculator = () => {
  const [savings, setSavings] = useState(0);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [totalZakat, setTotalZakat] = useState(0);

  const calculateZakat = () => {
    const totalWealth = savings + gold + silver;
    const zakatAmount = totalWealth * 0.025; // Zakat rate is 2.5%

    setTotalZakat(zakatAmount);
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
      <div style={{ marginBottom: '80px', marginTop: '60px' }}>
        <div className='page-container'>
          <div className='calculator-container'>
            <div className='calculator'>
              <h2>Zakat Calculator</h2>
              <div className='input-field'>
                <label>
                  Savings:
                  <input
                    type='number'
                    value={savings}
                    onChange={(e) => setSavings(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className='input-field'>
                <label>
                  Gold (in grams):
                  <input
                    type='number'
                    value={gold}
                    onChange={(e) => setGold(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className='input-field'>
                <label>
                  Silver (in grams):
                  <input
                    type='number'
                    value={silver}
                    onChange={(e) => setSilver(parseFloat(e.target.value))}
                  />
                </label>
              </div>
              <div className='input-field'>
                <button onClick={calculateZakat}>Calculate Zakat</button>
              </div>
              <div className='input-field'>
                <h3>Total Zakat Amount: {totalZakat.toFixed(2)} units</h3>
              </div>
            </div>
          </div>
          <div className='image-container'>
            <img src={require('../zakat.jpg')} alt='Zakat' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZakatCalculator;
