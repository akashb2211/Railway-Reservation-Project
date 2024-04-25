import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import LogoutButton from './logout';
import AddRecord from './addRecord';
import '../css/GetAllRecord.css';

const UpdateForm = ({ selectedUser, onClose, onUpdate }) => {
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
  

  useEffect(() => {
    if (selectedUser) {
      // Prefill form fields with selected user's data
      setTrain_Number(selectedUser.train_number || '');
     
      setTrain_Name(selectedUser.train_name || '');
      setSource(selectedUser.source || '');
      setDestination(selectedUser.destination || '');
      setclasstype(selectedUser.classtype || '');
      setTrain_Time(selectedUser.train_time || '');
      setTrain_Date(selectedUser.train_date || '');
      setRunning_Days(selectedUser.running_days || '');
      setHalt_Time(selectedUser.halt_time || '');
      setDistance(selectedUser.distance || '');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Id: selectedUser.Id,
      train_number,
      train_name,
      source,
      destination,
      classtype,
      train_time,
      train_date,
      running_days,
      halt_time,
      distance
       };

      
    axios
      .put('http://localhost:4000/train/record/', userData)
      .then((response) => {
        console.log('Train data updated successfully');
        // Handle any further actions or UI updates
        onUpdate();
        onClose();
      })
      .catch((error) => {
        console.log('**ERROR**', error);
      });
  };

  const handleCloseForm = () => {
    onClose();
  };

  return (
    <div className="update-form">
      <h2>Update Train</h2>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
         



     
            <tr>
              <td>
                <label>train_name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={train_name}
                  onChange={(e) => setTrain_Name(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>source:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  required
                />
              </td>
            </tr>
          

            <tr>
              <td>
                <label>destination:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>classtype:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={classtype}
                  onChange={(e) => setclasstype(e.target.value)}
                  required
                />
              </td>
            </tr>

            
            <tr>
              <td>
                <label>train_time:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={train_time}
                  onChange={(e) => setTrain_Time(e.target.value)}
                  required
                />
              </td>
            </tr>

            
            <tr>
              <td>
                <label>train_date:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={train_date}
                  onChange={(e) => setTrain_Date(e.target.value)}
                  required
                />
              </td>
            </tr>



            <tr>
              <td>
                <label>running_days:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={running_days}
                  onChange={(e) => setRunning_Days(e.target.value)}
                  required
                />
              </td>
            </tr>
           




            <tr>
              <td>
                <label>halt_time:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={halt_time}
                  onChange={(e) => setHalt_Time(e.target.value)}
                  required
                />
              </td>
            </tr>
           


            <tr>
              <td>
                <label>distance:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                />
              </td>
            </tr>
       
       
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                {"   "}
                <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>
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

const GetAllRecord = () => {
  const [users, setUsers] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddRecord, setShowAddRecord] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [showAddRecord]);

  const fetchUsers = () => {
    axios
      .get('http://localhost:4000/train/')
      .then((response) => {
        const user = response.data;
        setUsers(user.data);
      })
      .catch((error) => {
        console.log('**ERROR**', error);
      });
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (train_number) => {
    if (window.confirm('Are you sure you want to delete this Train?')) {
      axios
        .delete(`http://localhost:4000/train/canceltrain/${train_number}`)
        .then((response) => {
          console.log('Train deleted successfully');
          // Handle any further actions or UI updates
          fetchUsers(); // Refresh the user list after deletion
        })
        .catch((error) => {
          console.log('**ERROR**', error);
        });
    }
  };

  useEffect(() => {
    if (searchCategory) {
      const filteredUsers = users.filter((user) =>
      user.train_name.toLowerCase().includes(searchCategory.toLowerCase())
      );
      setUsers(filteredUsers);
    } else {
      fetchUsers(); // Fetch all users again when searchCategory is empty
    }
  }, [searchCategory]);

  const handleAddRecord = () => {
    setShowAddRecord(true);
  };

  const handleCloseAddRecord = () => {
    setShowAddRecord(false);
  };

  return (
    <div className="get-all-record">
      <LogoutButton />
      <button type="button" className="btn btn-primary" onClick={handleAddRecord}>
        Add Train
      </button>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <button onClick={() => setSearchCategory('')}>Reset</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>

       
            <tr>
              <th>train_number</th>
             
              <th>train_name</th>
              <th>source</th>
              <th>destination</th>
              <th>classtype</th>
              <th>train_time</th>
              <th>train_date</th>
              <th>running_days</th>
              <th>halt_time</th>
              <th>distance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.Id}>
                <td>{user.train_number}</td>
              
                <td>{user.train_name}</td>
                <td>{user.source}</td>
                <td>{user.destination}</td>
                <td>{user.classtype}</td>
                <td>{user.train_time}</td>
                <td>{user.train_date}</td>
                <td>{user.running_days}</td>
                <td>{user.halt_time}</td>
                <td>{user.distance}</td>
                <td>
                  <button onClick={() => handleUpdate(user)}>Update</button>
                  {"   "}
                  <button onClick={() => handleDeleteUser(user.train_number)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={showForm}
        onRequestClose={handleCloseForm}
        contentLabel="Update User"
      >
        <UpdateForm
          selectedUser={selectedUser}
          onClose={handleCloseForm}
          onUpdate={fetchUsers}
        />
      </Modal>
      <Modal
        isOpen={showAddRecord}
        onRequestClose={handleCloseAddRecord}
        contentLabel="Add Record"
      >
        <AddRecord onClose={handleCloseAddRecord} />
      </Modal>
    </div>
  );
};

export default GetAllRecord;






