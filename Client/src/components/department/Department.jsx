// department.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/constants'; // Import your data

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments data (replace this with your actual data fetching logic)
    setDepartments(data.departments);
  }, []);

  const handleDelete = () => {
    // Handle delete logic
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
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department, index) => (
              <tr key={index}>
                <td>{department.departmentName}</td>
                <td>{department.departmentProfileImage}</td>
                <td>{department.yearFounded}</td>
                <td>{department.description}</td>
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
