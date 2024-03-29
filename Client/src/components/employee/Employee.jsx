import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/employee`)
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (employeeId) => {

    if (!employeeId) {
      console.error("invalid employee Id")

      return
    }

    axios.delete(`${import.meta.env.VITE_API_BASE_URL}/delete_employee/${employeeId}`)
      .then(result => {
        setEmployees(employees.filter(employee => employee._id !== (employeeId)))
      })


      .catch(error => console.error('Error deleting department head:', error));
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
              <th> Department</th>
              <th> Head</th>
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
                      src={`${import.meta.env.VITE_API_BASE_URL}/upload/${employee.image}`}
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
                  <div className="d-flex">
                    <Link to={`/dashboard/edit_employee/${employee._id}`} className='btn btn-success  p-2 m-2'>
                      <i className='fas fa-edit'></i>
                    </Link>

                    <Link to={`/profile_employee/${employee._id}`} className='btn btn-secondary p-2 m-2'>
                    <i className='fas fa-eye'></i>
                  </Link>

                    <button
                      className='btn btn-danger  p-2 m-2'
                      onClick={() => handleDelete(employee._id)}
                    >
                      <i className='fas fa-trash-alt'></i>
                    </button>
                  </div>
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