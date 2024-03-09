import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
  
const { Meta } = Card;

const ViewHead = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/heads`)
      .then(result => setDepartmentHeads(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department Heads Card</h3>
      </div>
      <Link to="/dashboard/dash" className="btn btn-secondary btn-sm"><ArrowLeftOutlined /></Link>

      <div className='row mt-3'>
        {departmentHeads.map((departmentHead, index) => (
          <div key={index} className='col-md-4 mb-3'>
            <Card
              hoverable 
              style={{ width: 300 }}
              cover={
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${departmentHead.image}`}
                  alt="Department Head Image"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
            >
              <Meta title={departmentHead.name} description={`Age: ${departmentHead.age}`} />
              <p>Employee Number: {departmentHead.number}</p>
              <p>{departmentHead.description}</p>
              <p>Department: {departmentHead.select}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewHead;

