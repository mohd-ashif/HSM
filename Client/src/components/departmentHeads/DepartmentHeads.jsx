import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DepartmentsHeads = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  useEffect(() => {
   
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
              <th> Name</th>
              <th> Age</th>
              <th>Profile Image</th>
              <th>Employee Number</th>
              <th>description</th>
              <th>select</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {departmentHeads.map((departmentHeads, index) => (
              <tr key={index}>
                <td>{departmentHeads.name}</td>
                <td>{departmentHeads.age}</td>
                <td className='img1'>{departmentHeads.image}</td>
                <td>{departmentHeads.number}</td>
                <td>{departmentHeads.description}</td>
                <td>{departmentHeads.select}</td>
                <td>
                  <Link to='/edit_heads' className='btn btn-success'>
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

export default DepartmentsHeads;
