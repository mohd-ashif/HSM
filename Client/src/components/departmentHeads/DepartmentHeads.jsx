import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DepartmentsHeads = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  useEffect(() => {         
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/heads`)
      .then(result => setDepartmentHeads(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (departmentHeadId) => {
    if (!departmentHeadId) {
      console.error('Invalid department head ID');
      return;
    }

    axios.delete(`${import.meta.env.VITE_API_BASE_URL}/delete_heads/${departmentHeadId}`)

      .then(result => {

        setDepartmentHeads(departmentHeads.filter(head => head._id !== departmentHeadId));
      })
      .catch(error => console.error('Error deleting department head:', error));
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
              <th>Head Number</th>
              <th>Description</th>
              <th>Department </th>
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
                    src={`${import.meta.env.VITE_API_BASE_URL}/upload/${departmentHead.image}`}
                    alt="Department Image"
                    style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                </td>
                <td>{departmentHead.number}</td>
                <td>{departmentHead.description}</td>
                <td>{departmentHead.select}</td>
                <td className="d-flex">
                  <Link to={`/dashboard/edit_heads/${departmentHead._id}`} className='btn btn-success p-2 m-2'>
                    <i className='fas fa-edit'></i>
                  </Link>

                  <Link to={`/profile_head/${departmentHead._id}`} className='btn btn-secondary p-2 m-2'>
                    <i className='fas fa-eye'></i>
                  </Link>

                  <button
                    className='btn btn-danger p-2 m-2'
                    onClick={(e) => handleDelete(departmentHead._id)}
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
