import React, { useState } from 'react';
import axios from 'axios';
import '../css/register.css';

const Register = ({ onClose }) => {
  const [train_number, setTrain_Number] = useState('');
  
  const [train_name, setTrain_Name] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [classtype, setclasstype] = useState('');
  const [train_time, setTrain_Time] = useState('');
  const [train_date, setTrain_Date] = useState('');
  const [running_days, setRunning_Days] = useState('');
  const [halt_time, setHalt_Time] = useState('');
  const [distance, setDistance] = useState('');




  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Request body
    const data = {
     
      train_number: train_number,
     
      train_name: train_name,
      source: source,
      destination:destination,
      classtype:classtype,
      train_time:train_time,
      train_date:train_date,
      running_days:running_days,
      halt_time:halt_time,
      distance:distance,
    
    };

    axios
      .post('http://localhost:4000/train/addtrain', data)
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
      <h2 className="register-title">Add Train </h2>
      <form onSubmit={handleSubmit} className="register-form">
        <table className="register-table">
          <tbody>
           
            <tr>
              <td>
                <label className="form-label">train_number:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={train_number}
                  onChange={(e) => setTrain_Number(e.target.value)}
                  required
                />
              </td>
            </tr>

 
            <tr>
              <td>
                <label className="form-label">train_name:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={train_name}
                  onChange={(e) => setTrain_Name(e.target.value)}
                  required
                />
              </td>
            </tr>
            
            <tr>
              <td>
                <label className="form-label">source:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  required
                />
              </td>
            </tr>


            <tr>
              <td>
                <label className="form-label">destination:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </td>
            </tr>


            <tr>
              <td>
                <label className="form-label">classtype:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={classtype}
                  onChange={(e) => setclasstype(e.target.value)}
                  required
                />
              </td>
            </tr>
            
            <tr>
              <td>
                <label className="form-label">train_time:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={train_time}
                  onChange={(e) => setTrain_Time(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label className="form-label">train_date:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={train_date}
                  onChange={(e) => setTrain_Date(e.target.value)}
                  required
                />
              </td>
            </tr>


            <tr>
              <td>
                <label className="form-label">running_days:</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={running_days}
                  onChange={(e) => setRunning_Days(e.target.value)}
                  required
                />
              </td>
            </tr>



            <tr>
              <td>
                <label className="form-label">halt_time</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={halt_time}
                  onChange={(e) => setHalt_Time(e.target.value)}
                  required
                />
              </td>
            </tr>

            

            <tr>
              <td>
                <label className="form-label">distance</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                />
              </td>
            </tr>

            




            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-primary">
                  Add
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
