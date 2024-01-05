import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const View_head = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/heads')
      .then(result => setDepartmentHeads(result.data))
      .catch(err => console.log(err));
  }, []);

 

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department Heads Card</h3>
      </div>
      <Link to="/dashboard/dash" className="btn btn-secondary btn-sm">Back</Link>
   

      <div className='row mt-3'>
        {departmentHeads.map((departmentHead, index) => (
          <div key={index} className='col-md-4 mb-3'>
            <div className='card custom-black-card border'>
              <img
                src={`http://localhost:3000/upload/${departmentHead.image}`}
                alt="Department Head Image"
                className='card-img-top'
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{departmentHead.name}</h5>
                <p className='card-text'>Age: {departmentHead.age}</p>
                <p className='card-text'>Employee Number: {departmentHead.number}</p>
                <p className='card-text'>{departmentHead.description}</p>
                <p className='card-text'>Department: {departmentHead.select}</p>

               
              </div>
            </div>
          </div>
        ))}         
      </div>
    </div>
  );
};

export default View_head;
