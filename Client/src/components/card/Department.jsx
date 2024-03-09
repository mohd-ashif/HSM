import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


const { Meta } = Card;

const ViewDepartment = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/departments`)
      .then(result => setDepartments(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className=' container mt-5 '>
      <div className='d-flex justify-content-between mb-3'>
        <div>
          <Link to="/dashboard/dash" className="btn btn-secondary"><ArrowLeftOutlined /></Link>
        </div>
      </div>

      <div className='d-flex justify-content-center'>
        <h3>Department Card</h3>
      </div>

      <div className='row mt-3'>
        {departments.map((department) => (
          <div key={department._id} className='col-md-4 mb-4'>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt='Department Image'
                  src={`${import.meta.env.VITE_API_BASE_URL}/${department.image}`}
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
              } 
            >    
              <Meta title={department.name}
                description={`Year Founded: ${department.year}`} />
              <p>Description: {department.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDepartment;
