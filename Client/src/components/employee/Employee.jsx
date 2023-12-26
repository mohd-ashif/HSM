import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   
  }, []);

  const handleDelete = () => {
  
  };

  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to='/dashboard/add_employee' className='btn btn-success'>
        Add Employee
      </Link>
      <div className='table-responsive w-100'>
        <table className='table'>
          <thead>
            <tr>
              <th> Name</th>
              <th>Age</th>
              <th>Number</th>
              <th>Profile Image</th>
              <th>description</th>
              <th>Select Department</th>
              <th>Select Head</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.number}</td>
                <td>{user.image}</td>
                <td>{user.description}</td>
                <td>{selectDepartment}</td>
                <td>{selectHead}</td>
                <td>
                  <Link to='/edit_department' className='btn btn-success'>
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger'
                    onClick={(e) => handleDelete()}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Departments;