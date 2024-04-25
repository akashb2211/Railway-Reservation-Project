import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/logout.css';

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear session storage and redirect to login page
    sessionStorage.clear();
    history.push('/login');
    window.location.reload();
  };

  return (
    <div className="logout-button-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
