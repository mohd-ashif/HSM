import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/employee")
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (employeeId) => {

    console.log(`Deleting employee with ID: ${employeeId}`);
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
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.number}</td>
                <td>
                  {employee.image ? (
                    <img
                      src={`http://localhost:3000/upload/${employee.image}`}
                      alt="Employee Image"
                      style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                  ) : (
                    <span>No Image Available</span>
                  )}

                </td>
                <td>{employee.description}</td>
                <td>{employee.selectDepartment}</td>
                <td>{employee.selectHead}</td>
                <td>
                  <Link to={`/edit_employee/${employee._id}`} className='btn btn-success'>
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(employee._id)}
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

export default Employee;