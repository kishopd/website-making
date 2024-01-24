// components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>Trademarkia.ai</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <NavItem label="Explore AI Tools" />
        <NavItem label="Trademarkia Global" />
        <SignupButton label="Sign up for Pro Account" />
      </div>

      <div style={{ marginTop: '40px' }}>
        <p>Using Artificial Intelligence</p>
        <p>Experience The Power Of Legal Automation</p>
        <p>The new standard for trademark protection and hassle-free trademark management</p>
      </div>

      <FeatureSection title="Trademarkia.ai" content="Data Predictions" />
      <FeatureSection title="Try Trademarkia AI" content="Predictions" />

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <PricingCard plan="Basic" price="$0" />
        <PricingCard plan="Standard" price="$49/month" />
        <PricingCard plan="Premium" price="$499/month" />
        <PricingCard plan="Enterprise" price="$2000/month" />
      </div>
    </div>
  );
};

const NavItem = ({ label }) => (
  <div style={{ cursor: 'pointer', textAlign: 'center' }}>
    <span style={{ color: '#FFA500', display: 'block', marginBottom: '5px' }}>{label}</span>
  </div>
);

const SignupButton = ({ label }) => (
  <button style={{ backgroundColor: '#FFA500', color: 'black', padding: '10px 20px', borderRadius: '5px' }}>
    {label}
  </button>
);

const FeatureSection = ({ title, content }) => (
  <div style={{ marginTop: '40px' }}>
    <h2>{title}</h2>
    <p>{content}</p>
    {/* Add more content as needed */}
  </div>
);

const PricingCard = ({ plan, price }) => (
  <div style={{ textAlign: 'center', border: '1px solid white', padding: '20px', borderRadius: '5px' }}>
    <h3>{plan}</h3>
    <p>{price}</p>
    {/* Add more details or features for each plan */}
    <button style={{ backgroundColor: '#FFA500', color: 'black', padding: '10px 20px', borderRadius: '5px', marginTop: '10px' }}>
      Get Started
    </button>
  </div>
);

export default HomePage;
