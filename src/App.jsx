import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SignUpForm from './components/SignUpForm';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const sampleUsers = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Mike Johnson', email: 'mike.johnson@example.com' },
    { name: 'Sarah Wilson', email: 'sarah.wilson@example.com' }
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'signup':
        return <SignUpForm />;
      case 'users':
        return (
          <div className="users-section">
            <h2>User Cards Demo</h2>
            <p className="section-description">
              These are sample UserCard components displaying user information
            </p>
            <div className="users-grid">
              {sampleUsers.map((user, index) => (
                <UserCard 
                  key={index}
                  name={user.name}
                  email={user.email}
                />
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="home-section">
            <h1>Frontend Tasks Demo</h1>
            <p className="hero-description">
              Welcome to the React Frontend Tasks demonstration. 
              This project showcases three main components built with modern React and CSS.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>Sign-Up Form</h3>
                <p>Modern form with validation, responsive design, and smooth animations.</p>
                <button 
                  className="feature-btn"
                  onClick={() => setCurrentSection('signup')}
                >
                  View Form
                </button>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🧭</div>
                <h3>Navigation Bar</h3>
                <p>Responsive navigation with mobile hamburger menu and smooth transitions.</p>
                <span className="feature-note">(Already visible at the top)</span>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">👤</div>
                <h3>User Cards</h3>
                <p>Beautiful user profile cards with avatars, actions, and hover effects.</p>
                <button 
                  className="feature-btn"
                  onClick={() => setCurrentSection('users')}
                >
                  View Cards
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
