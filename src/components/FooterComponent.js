import React from 'react';

const FooterComponent = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div>
        <h3>HopeHub</h3>
        <p>&copy; {new Date().getFullYear()} HopeHub. All Rights Reserved.</p>
        <p>Email: HopeHub@gmail.com</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
