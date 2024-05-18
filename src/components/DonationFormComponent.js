// DonationFormComponent.jsx

import React, { useState } from 'react';

const DonationFormComponent = () => {
  const [donationInfo, setDonationInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    accountNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationInfo({
      ...donationInfo,
      [name]: value,
    });
  };

  const handleDonate = () => {
    // Add logic to handle the donation (e.g., send data to the server)
    console.log('Donation Submitted:', donationInfo);
    // You can reset the form fields if needed
    setDonationInfo({
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      accountNo: '',
    });
  };

  return (
    <div>
      {/* Logo and Name Box */}
      <div className='logo-name-box'>
        <img src={require('../images.png')} alt='Website Logo' />
        <h1>HopeHub</h1>
      </div>
      <div>
        {/* Donation Form and Image Container */}
        <div className='donation-container'>
          {/* Donation Form Container */}
          <div className='donation-form-container'>
            <h2>Make a Donation</h2>
            <form>
              <div className='form-group'>
                <label>
                  First Name*
                  <input
                    type='text'
                    name='firstName'
                    value={donationInfo.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Last Name*
                  <input
                    type='text'
                    name='lastName'
                    value={donationInfo.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Email*
                  <input
                    type='email'
                    name='email'
                    value={donationInfo.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Phone No*
                  <input
                    type='tel'
                    name='phoneNo'
                    value={donationInfo.phoneNo}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Project you want to support:
                  <input
                    type='text'
                    name='projectName'
                    value={donationInfo.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Account No*
                  <input
                    type='text'
                    name='accountNo'
                    value={donationInfo.accountNo}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <button type='button' onClick={handleDonate}>
                Donate
              </button>
            </form>
          </div>

          {/* Image Container */}
          <div className='donation-image-container'>
            <img src={require('../downloaddon.jpg')} alt='Donation Image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationFormComponent;
