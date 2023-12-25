import React, { useState } from 'react';

const Add_Heads = () => {
   

  const [ name, setName] =useState('')
  const [number, setNumber] = useState('')
  const [description,setDescription] = useState('')
  const [ image , setImage] =useState("")

  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Department</h2>
        <form >
          <div className='mb-3'>
            <label htmlFor="departmentName"><strong> Name</strong></label>
            <input
              type="text"
              name='departmentName'
              placeholder='Enter Name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.vale)}
              
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="category1"><strong>Number</strong></label>
            <input
              type="text"
              name='year foud'
              placeholder='Enter number'
              className='form-control rounded-0'
              onChange={(e) => setYear(e.target.vale)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="category2"><strong>Description</strong></label>
            <input
              type="text"
              name='Description'
              placeholder='Enter description'
              className='form-control rounded-0'
              onChange={(e) => setDescription(e.target.vale)}
            />
          </div>

          

          <div className='mb-3'>
            <label htmlFor="image"><strong>Upload Image:</strong></label>
            <input
              type="file"
              accept="image/*"
              name='image'
              onChange={(e) => setImage(e.target.vale)}
              className='form-control rounded-0'
            />
          </div>

          <button className='btn btn-success w-100 rounded-0 mb-2'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add_Heads
