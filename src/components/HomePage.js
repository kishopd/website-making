import React, { useState } from 'react';

const ParallelogramShape = () => {
  const parallelogramStyle = {
    textAlign: 'center',
  };

  const h2Style = {
    fontFamily: 'open sans',
    color: '#fff',
    position: 'relative',
    display: 'inline-block',
    padding: '10px 20px',
    border: '2px solid black', // Black border for the parallelogram
  };

  const afterStyle = {
    background: '#3498db',
    position: 'absolute',
    content: '',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    transform: 'skew(-9deg)',
    WebkitTransform: 'skew(-9deg)',
    MozTransform: 'skew(-9deg)',
    OTransform: 'skew(-9deg)',
    zIndex: -1,
  };

  return (
    <div style={parallelogramStyle}>
      <h2 style={h2Style}>
        Try Trademarkia Ai
        <span style={afterStyle}></span>
      </h2>
    </div>
  );
};

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (item) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={leftCornerStyle}>
          <span style={trademarkStyle}>
            <span style={{ color: 'white' }}>Trademark</span>
            <span style={{ color: 'blue' }}>.</span>
            <span style={{ color: '#b08859' }}>ai</span>
          </span>
        </div>
        <div style={centerStyle}>
          <NavItem
            label="Home"
            isHovered={hovered === 'home'}
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          />
          <Separator />
          <NavItem
            label="Explore AI Tools"
            isHovered={hovered === 'explore'}
            onMouseEnter={() => handleMouseEnter('explore')}
            onMouseLeave={handleMouseLeave}
          />
          <Separator />
          <NavItem
            label="Our Brand"
            isHovered={hovered === 'ourBrand'}
            onMouseEnter={() => handleMouseEnter('ourBrand')}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div style={rightCornerStyle}>
          <button style={buttonStyle} onMouseEnter={() => handleMouseEnter('signup')} onMouseLeave={handleMouseLeave}>
            ★ Sign up for Pro Account
          </button>
        </div>
      </header>

      {/* New Container for "★ Using Artificial Intelligence" */}
      <div style={welcomeContainerStyle}>
        <p>★ Using Artificial Intelligence</p>
        <p style={experiencePowerStyle}>Experience The Power Of</p>
        <p style={legalAutomationStyle}>Legal Automation</p>
        <p style={newStandardStyle}>
          The new standard for trademark protection and hassle-free trademark management
        </p>

        {/* Parallelogram Structure Box */}
        <ParallelogramShape />
      </div>
    </div>
  );
};

const NavItem = ({ label, isHovered, onMouseEnter, onMouseLeave }) => {
  const itemStyle = {
    display: 'inline-block',
    background: isHovered ? '#b08859' : '#191919', // Light dark initially, changes to Biscuit Brown on hover
    color: isHovered ? '#191919' : 'white', // White initially, changes to Light dark on hover
    textDecoration: isHovered ? 'underline' : 'none',
    cursor: 'pointer',
    marginRight: '10px',
    padding: '5px 10px',
  };

  const iStyle = {
    color: isHovered && label === 'Our Brand' ? 'blue' : 'transparent',
    fontWeight: 'bold',
  };

  return (
    <span style={itemStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {label === 'Our Brand' ? (
        <>
          <span style={iStyle}>i</span>a Global
        </>
      ) : (
        label
      )}
    </span>
  );
};

const Separator = () => {
  return <span style={{ color: 'white' }}>|</span>;
};

// Styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#191919', // Initial light dark background
  color: 'white',
};

const leftCornerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const trademarkStyle = {
  fontSize: '1.2rem',
  fontWeight: '500',
  marginRight: '20px',
};

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const rightCornerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#b08859', // Biscuit Brown for the button
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

// New Container Styles
const welcomeContainerStyle = {
  backgroundColor: '#001F3F', // Dark blue background color
  padding: '20px',
  textAlign: 'center',
  color: 'white',
};

const experiencePowerStyle = {
  fontSize: '2rem',
  margin: '10px 0',
  color: 'white', // Added color for consistency
};

const legalAutomationStyle = {
  fontSize: '2rem',
  margin: '10px 0',
  color: 'white', // Added color for consistency
};

const newStandardStyle = {
  fontSize: '1.2rem',
  margin: '10px 0',
  color: 'white', // Added color for consistency
};

export default Header;
