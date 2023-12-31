import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DepartmentsHeads = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/heads')
      .then(result => setDepartmentHeads(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = () => {
   
  };

  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department Heads list</h3>
      </div>
      <Link to='/dashboard/add_heads' className='btn btn-success'>
        Add Department Heads
      </Link>
      <div className='table-responsive w-100'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Profile Image</th>
              <th>Employee Number</th>
              <th>Description</th>
              <th>Select</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {departmentHeads.map((departmentHead, index) => (
              <tr key={index}>
                <td>{departmentHead.name}</td>
                <td>{departmentHead.age}</td>
                <td>
                  <img
                    src={`http://localhost:3000/upload/${departmentHead.image}`}
                    alt="Department Image"
                    style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </td>
                <td>{departmentHead.number}</td>
                <td>{departmentHead.description}</td>
                <td>{departmentHead.select}</td>
                <td>
                  <Link to={`/dashboard/edit_heads/${departmentHead._id}`} className='btn btn-success'>
                    <i className='fas fa-edit'></i> 
                  </Link>
                  <button
                    className='btn btn-danger'
                    onClick={(e) => handleDelete()}
                  >
                    <i className='fas fa-trash-alt'></i>
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

export default DepartmentsHeads;
