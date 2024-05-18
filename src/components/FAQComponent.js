import React from 'react';
import { Link } from 'react-router-dom';
const FAQComponent = () => {
  const faqData = [
    {
      question: 'How can I support your NGO?',
      answer:
        'You can support our NGO by making a donation, volunteering, or spreading awareness about our projects.',
    },
    {
      question: 'Are my donations secure?',
      answer:
        'Yes, we prioritize the security of your donations. We use secure payment gateways and follow industry standards.',
    },
    {
      question: 'How can I donate to a specific project?',
      answer:
        'You can donate to a specific project by visiting our "Projects" page, selecting the project you wish to support, and clicking on the "Donate Now" button.',
    },
    {
      question: 'Is my donation tax-deductible?',
      answer:
        'Yes, your donation is tax-deductible. We will provide you with a receipt and necessary documentation for tax purposes.',
    },
    {
      question: 'Can I volunteer for your organization?',
      answer:
        'Absolutely! We welcome volunteers. Visit our "Volunteer" page to learn more about available opportunities and how to get involved.',
    },
    {
      question: 'How can NGOs partner with HopeHub?',
      answer:
        'NGOs interested in partnering with HopeHub can fill out our partnership application form on the "Partner with Us" page. We will review your application and get in touch with you.',
    },
    {
      question: 'What happens to my donation?',
      answer:
        'Your donation goes directly to supporting our projects and initiatives. We ensure transparency and accountability in fund utilization, providing regular updates on project outcomes.',
    },
  ];

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

      <div
        style={{
          maxWidth: '1600px',
          marginTop: '5px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <h2>Frequently Asked Questions (FAQ)</h2>
        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
