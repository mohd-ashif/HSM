import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const View_department = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/departments')
      .then(result => setDepartments(result.data))
      .catch(err => console.log(err));
  }, []);

 
  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department Card</h3>
      </div>
   

      <div className='row mt-3'>
        {departments.map((department) => (
          <div key={department._id} className='col-md-4 mb-4'>
            <div className='card border'>
              <img
                src={`http://localhost:3000/upload/${department.image}`}
                alt='Department Image'
                className='card-img-top'
                style={{ height: '200px', objectFit: 'cover' }}
              />

              <div className='card-body'>
                <h5 className='card-title'>{department.name}</h5>
                <p className='card-text'>Year Founded: {department.year}</p>
                <p className='card-text'>Description: {department.description}</p>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_department;
