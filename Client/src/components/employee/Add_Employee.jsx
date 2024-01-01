import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [selectedDepartment, setSelectDepartment] = useState('');
  const [selectedHead, setSelectHead] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('number', number);
    formData.append('description', description);
    formData.append('age', age);
    formData.append('image', image);
    formData.append('selectDepartment', selectedDepartment);
    formData.append('selectHead', selectedHead);

    try {
      const response = await axios.post('http://localhost:3000/dashboard/add_employee', formData, {
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
              name='department'
              className='form-control rounded-0'
              value={selectedDepartment}
              onChange={(e) => setSelectDepartment(e.target.value)}
            >
              <option value=''>Select Department</option>
              <option value='Cardiology'>Cardiology</option>
              <option value='Pediatrics'>Pediatrics</option>
              <option value='Radiology'>Radiology</option>
              <option value='Surgery'>Surgery</option>
              <option value='Emergency Medicine'>Emergency Medicine</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="head"><strong>Select Department Head</strong></label>
            <select
              name='head'
              className='form-control rounded-0'
              value={selectedHead}
              onChange={(e) => setSelectHead(e.target.value)}
            >
              <option value=''>Select Department Head</option>
              <option value='Head1'>Head1</option>
              <option value='Head2'>Head2</option>
              <option value='Head3'>Head3</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="image"><strong>Upload Image:</strong></label>
            <input
              type="file"
              accept="image/*"
              name='image'
              onChange={(e) => setImage(e.target.files[0])}
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