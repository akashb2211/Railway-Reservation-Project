import React, { useState } from 'react';
import axios from 'axios';
import '../css/register.css';

const Register = ({ onClose }) => {

  const [name, setName] = useState('');  

  const [address, setAddress] = useState('');
  const [email_id, setEmail] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Request body
    const data = {
      name:name,
      address:address,
      email_id:email_id,
     phone_no:phone_no,    
      
      password: password
    };

    axios
      .post('http://localhost:4000/admin/register', data)
      .then((response) => {
        console.log('Registration successful');
        // Handle any further actions or UI updates
        onClose();
      })
      .catch((error) => {
        console.log('**ERROR**', error);
      });
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Sing Up</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <table className="register-table">
          <tbody>


          <tr>
              <td>
                <label className="form-label">name:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label className="form-label">address:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </td>
            </tr>
            
            <tr>
              <td>
                <label className="form-label">email_id:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={email_id}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form-label">phone_no:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={phone_no}
                  onChange={(e) => setPhone_no(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label className="form-label">password:</label>
              </td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>{" "}
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Register;
