import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/employee`)
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center mb-3'>
        <h3>Employee Card</h3>
      </div>
      <Link to="/dashboard/dash" className="btn btn-secondary btn-sm"><ArrowLeftOutlined /></Link>

      <div className='row mt-3'>
        {employees.map((employee, index) => (
          <div key={index} className='col-md-4 mb-3'>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={employee.image ? (
                <img
                  alt='Employee Image'
                  src={`${import.meta.env.VITE_API_BASE_URL}/${employee.image}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  No Image Available
                </div>
              )}
            >
              <Meta
                title={employee.name}
                description={(
                  <span>
                    Age: {employee.age}, 
                 <br />   Number: {employee.number}, 
                 <br />
                  Department: {employee.selectDepartment}

                  </span>

                )}
              />
              <p>Description: {employee.description}</p>
              <p>Head: {employee.selectHead}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEmployee;
