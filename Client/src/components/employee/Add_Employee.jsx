import React, { useState } from 'react';

const Add_Heads = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedHead, setSelectedHead] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-7'>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Department</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="departmentName"><strong>Name</strong></label>
            <input
              type="text"
              name='departmentName'
              placeholder='Enter Name'
              className='form-control rounded-0'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="category1"><strong>Age</strong></label>
            <input
              type="text"
              name='yearFounded'
              placeholder='Enter Age'
              className='form-control rounded-0'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="category1"><strong>Number</strong></label>
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
            <label htmlFor="category2"><strong>Description</strong></label>
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
              onChange={(e) => setSelectedDepartment(e.target.value)}
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
              onChange={(e) => setSelectedHead(e.target.value)}
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
              onChange={(e) => setImage(e.target.value)}
              className='form-control rounded-0'
            />
          </div>

          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add_Heads;
