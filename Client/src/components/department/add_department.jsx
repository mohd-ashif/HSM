import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add_departmentlist = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('year', year);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/dashboard/add_departments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);

     
      navigate('/dashboard/departments');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <h2>Add Department</h2>
        <form onSubmit={submit}>
         
          <div className='mb-3'>
            <label htmlFor="departmentName"><strong>Department Name</strong></label>
            <input
              type="text"
              name='departmentName'
              placeholder='Enter Department Name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="yearFound"><strong>Year Found</strong></label>
            <input
              type="text"
              name='yearFound'
              placeholder='Enter Year Found'
              className='form-control rounded-0'
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="description"><strong>Description</strong></label>
            <input
              type="text"
              name='description'
              placeholder='Enter Description'
              className='form-control rounded-0'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>


          <div className='mb-3'>
            <label htmlFor="image"><strong>Upload Image:</strong></label>
            <input
              type="file"
              accept="image/*"
              name='image'
              onChange={(e) => setImage(e.target.files[0])}
              className='form-control rounded-0 '
            />
          </div>

          <button className='btn btn-success w-100 rounded-0 mb-2' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add_departmentlist;
