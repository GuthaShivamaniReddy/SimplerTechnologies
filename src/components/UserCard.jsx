import React from 'react';
import './UserCard.css';

const UserCard = ({ name, email }) => {
  // Get initials from name for avatar
  const getInitials = (fullName) => {
    if (!fullName) return '?';
    return fullName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate a consistent color based on name
  const getAvatarColor = (fullName) => {
    if (!fullName) return '#667eea';
    
    const colors = [
      '#667eea', '#764ba2', '#f093fb', '#f5576c',
      '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
      '#fa709a', '#fee140', '#a8edea', '#fed6e3'
    ];
    
    const hash = fullName.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="user-card">
      <div className="user-avatar" style={{ backgroundColor: getAvatarColor(name) }}>
        <span className="avatar-text">{getInitials(name)}</span>
      </div>
      
      <div className="user-info">
        <h3 className="user-name">{name || 'Unknown User'}</h3>
        <p className="user-email">{email || 'No email provided'}</p>
      </div>
      
      <div className="user-actions">
        <button className="action-btn view-btn">
          <span className="btn-icon">👁️</span>
          View Profile
        </button>
        <button className="action-btn message-btn">
          <span className="btn-icon">💬</span>
          Message
        </button>
      </div>
      
      <div className="user-status">
        <span className="status-dot"></span>
        <span className="status-text">Online</span>
      </div>
    </div>
  );
};

export default UserCard;
