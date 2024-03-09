import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const [selectedDepartment, setSelectDepartment] = useState('');
  const [selectHead, setSelectHead] = useState('');
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [departmentHeads, setDepartmentHeads] = useState([]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('number', number);
    formData.append('description', description);
    formData.append('age', age);
    formData.append('image', image);
    formData.append('selectDepartment', selectedDepartment);
    formData.append('selectHead', selectHead);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/dashboard/add_employee`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form Data:', formData);
      console.log('Response:', response.data);

      navigate('/dashboard/employee');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="employeeName"><strong>Name</strong></label>
            <input
              type="text"
              name='employeeName'
              placeholder='Enter Name'
              className='form-control rounded-0'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="age"><strong>Age</strong></label>
            <input
              type="text"
              name='age'
              placeholder='Enter Age'
              className='form-control rounded-0'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="number"><strong>Number</strong></label>
            <input
              type="text"
              name='number'
              placeholder='Enter Number'
              className='form-control rounded-0'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="description"><strong>Description</strong></label>
            <input
              type="text"
              name='description'
              placeholder='Enter Description'
              className='form-control rounded-0'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="department"><strong>Select Department</strong></label>
            <select
              className='form-control'
              onChange={(e) => setSelectDepartment(e.target.value)}
            >
              <option value={selectedDepartment}>Select Department</option>
              {departments.map((data) => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="description"><strong> Head</strong></label>
            <select
              className='form-control'
              onChange={(e) => setSelectHead(e.target.value)}
            >
              <option value={selectHead}>Select Department Head</option>
              {departmentHeads.map((value) => (
                <option key={value.id} value={value.name}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="image"><strong>Upload Image:</strong></label>
            <input
              type="file"
              accept="image/*"
              name='image'
              onChange={handleImageChange}
              className='form-control rounded-0'
            />
          </div>

          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
