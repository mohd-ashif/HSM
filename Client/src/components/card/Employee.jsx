import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const View_employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employee')
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center mb-3'>
       
        <h3>Employee Card</h3>
        
      </div>
      <Link to="/dashboard/dash" className="btn btn-secondary btn-sm">Back</Link>

      <div className='row mt-3'>
        {employees.map((employee, index) => (
          <div key={index} className='col-md-4 mb-3'>
            <div className='card custom-black-card border'>
              {employee.image ? (
                <img
                  src={`http://localhost:3000/upload/${employee.image}`}
                  alt='Employee Image'
                  className='card-img-top'
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              ) : (
                <div className='card-img-top d-flex align-items-center justify-content-center'>
                  No Image Available
                </div>
              )}

              <div className='card-body'>
                <h5 className='card-title'>{employee.name}</h5>
                <p className='card-text'>Age: {employee.age}</p>
                <p className='card-text'>Number: {employee.number}</p>
                <p className='card-text'>Description: {employee.description}</p>
                <p className='card-text'>Department: {employee.selectDepartment}</p>
                <p className='card-text'>Head: {employee.selectHead}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_employee;
