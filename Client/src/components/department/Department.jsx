import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/departments')
      .then(result => setDepartments(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (departmentId) => {
    axios.delete(`http://localhost:3000/delete_department/${departmentId}`)
      .then(result => {
        console.log(result);
        setDepartments(departments.filter(dep => dep._id !== departmentId));
      })
      .catch(error => console.error('Error deleting department:', error));
  };

  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department List</h3>
      </div>
      <Link to='/dashboard/add_departments' className='btn btn-success'>
        Add Department
      </Link>
      <div className='table-responsive w-100'>
        <table className='table'>
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Profile Image</th>
              <th>Year Founded</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr key={department._id}>
                <td>{department.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/upload/${department.image}`}
                    alt="Department Image"
                    style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </td>
                <td>{department.year}</td>
                <td>{department.description}</td>
                <td>
                  <div className="d-flex">
                  <Link to={`/dashboard/edit_department/${department._id}`} className='btn btn-success  p-2 m-2'>
                  <i className='fas fa-edit'></i>
                  </Link>

                  <Link to="/view_department" className='btn btn-secondary p-2 m-2'>
                    <i className='fas fa-eye'></i>
                  </Link>

                  <button 
                    className='btn btn-danger  p-2 m-2'
                    style={{ marginLeft: '0.5rem' }} 
                    onClick={() => handleDelete(department._id)}
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

export default Departments;
