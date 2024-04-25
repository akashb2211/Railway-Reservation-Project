import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation, Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../css/login.css';
import Register from './register';

const Login = () => {
  const [email_id, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const location = useLocation();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/admin/login', { email_id, password })
      .then((response) => {
        const { status, message, data } = response.data;

        if (status === 'success') {
          // Successful login
         

          sessionStorage.setItem('isUserLoggedIn', 'true');
          sessionStorage.setItem('email', email_id);

          // Redirect to the intended destination or dashboard
          const redirectPath = location.state?.from.pathname || '/login/dash';
          history.push(redirectPath);
          window.location.reload();

        } else {
          // Invalid login
          setErrorMessage(message);
        }
      })
      .catch((error) => {
        console.log('**ERROR**', error);
      });
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">email_id:</label>
            <input
              type="email"
              className="form-control"
              name="email" // Add the name attribute
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">password:</label>
            <input
              type="password"
              className="form-control"
              name="password" // Add the name attribute
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mr-2">
              Login
            </button>{" "}
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>{" "}
            <Link to="/register" onClick={handleOpenRegisterModal}>
              Register
            </Link>
          </div>
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </form>
      </div>
      <Modal
        isOpen={showRegisterModal}
        onRequestClose={handleCloseRegisterModal}
        contentLabel="Register"
      >
        <Register onClose={handleCloseRegisterModal} />
      </Modal>
    </div>
  );
};

export default Login;
