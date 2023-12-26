// employee.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/constants'; // Import your data

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees data (replace this with your actual data fetching logic)
    setEmployees(data.employees);
  }, []);

  const handleDelete = () => {
    // Handle delete logic
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
              <th>Name</th>
              <th>Age</th>
              <th>Number</th>
              <th>Profile Image</th>
              <th>Description</th>
              <th>Select Department</th>
              <th>Select Head</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.employeeNumber}</td>
                <td>{employee.profileImage}</td>
                <td>{employee.profileDescription}</td>
                <td>{employee.department}</td>
                <td>{employee.reportTo}</td>
                <td>
                  <Link to='/edit_employee' className='btn btn-success'>
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

export default Employees;
