import { Button, Table, Space, Image, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons'; 


const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/departments`)
      .then(result => setDepartments(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (departmentId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/delete_department/${departmentId}`)
      .then(result => {
        console.log(result);
        setDepartments(departments.filter(dep => dep._id !== departmentId));
      })
      .catch(error => console.error('Error deleting department:', error));
  };

  const columns = [
    {
      title: 'Department Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Profile Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <Image
          src={`http://localhost:3000/upload/${record.image}`}
          alt="Department Image"
          style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
        />
      ),
    },
    {
      title: 'Year Founded',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/dashboard/edit_department/${record._id}`} className='btn btn-success p-2 m-2'>
          <EditOutlined />
          </Link>
          <Link to={`/profile_department/${record._id}`} className='btn btn-secondary p-2 m-2'>
          <EyeOutlined />
          </Link>
          <Button
            type="danger"
            className='btn btn-danger p-2 m-2'
            onClick={() => handleDelete(record._id)}
          >
           <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className='px-5 mt-5'>
      <div className='d-flex justify-content-center'>
        <h3>Department List</h3>
      </div>
     <Button type='' ><Link to='/dashboard/add_departments' >
        Add Department
      </Link>
      </Button> 
      
      <div className='table-responsive w-100'>
        <Table columns={columns} dataSource={departments} />
      </div>

      
    </div>
  );
};

export default Departments;
