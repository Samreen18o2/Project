import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectsComponent = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      description:
        'Provide clean and safe drinking water to communities in need.',
      goal: '$10,000',
      currentAmount: '$7,500',
    },
    {
      id: 2,
      title: 'Education for All',
      description:
        'Support educational programs to empower children with knowledge.',
      goal: '$15,000',
      currentAmount: '$12,000',
    },
    {
      id: 3,
      title: 'Feeding Hope',
      description:
        'Ensure no one goes to bed hungry by providing nutritious meals to the less fortunate.',
      goal: '$8,000',
      currentAmount: '$5,200',
    },
    {
      id: 4,
      title: 'Old Age Home Support',
      description:
        'Provide care and companionship to elderly individuals in need.',
      goal: '$12,000',
      currentAmount: '$9,800',
    },
    {
      id: 5,
      title: 'Empower Women',
      description:
        "Support women's empowerment initiatives, providing resources for education and skill development.",
      goal: '$18,000',
      currentAmount: '$14,500',
    },
    {
      id: 6,
      title: 'Orphan Home Project',
      description:
        'Create a loving and supportive environment for orphaned children, ensuring they receive education and care.',
      goal: '$20,000',
      currentAmount: '$16,500',
    },
    // Add more projects as needed
  ];
  const navigate = useNavigate();

  const handleDonate = (projectId) => {
    // Redirect to the DonationFormComponent with project ID as a parameter
    navigate(`/donate/${projectId}`);
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
        <h2>Current Projects</h2>
        {projectsData.map((project) => (
          <div
            key={project.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '20px',
              marginLeft: '20px',
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Goal:</strong> {project.goal}
            </p>
            <p>
              <strong>Current Amount:</strong> {project.currentAmount}
            </p>
            <button onClick={() => handleDonate(project.id)}>Donate Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;
