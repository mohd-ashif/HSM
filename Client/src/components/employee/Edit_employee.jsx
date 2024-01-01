import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit_employee() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [selectDepartment, setSelectDepartment] = useState('');
  const [selectHead, setSelectHead] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/get_employee/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setNumber(result.data.number);
        setSelectHead(result.data.selectHead);
        setSelectDepartment(result.data.selectDepartment);
        setAge(result.data.age);
        setDescription(result.data.description);
        setImage(result.data.image || null);
      })
      .catch(err => console.log(err));
  }, [id]);
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('number', number);
    formData.append('age', age);
    formData.append('description', description);
    formData.append('select', selectHead);
    formData.append('select', selectDepartment);

    axios.put(`http://localhost:3000/edit_employee/${id}`, formData)
      .then(result => {
        console.log(result);
        navigate('/dashboard/employee');

      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={handleFormSubmit}>
            <div className='mb-3'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input
                type="text"
                name='name'
                placeholder='Enter Name'
                className='form-control rounded-0'
                value={name}
                onChange={(e) => setName(e.target.value)}
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
    value={selectDepartment}
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
    value={selectHead}
    onChange={(e) => setSelectHead(e.target.value)}
            >
              <option value=''>Select Department Head</option>
              <option value='Head1'>Head1</option>
              <option value='Head2'>Head2</option>
              <option value='Head3'>Head3</option>
            </select>
          </div>

          {image && (
  <div className='mb-2'>
    <input
      type='file'
      placeholder='Upload'
      className='form-control'
      onChange={handleImageChange}
    />
    <div>
      Current Image:
      {image.name && (
        <img
          src={`http://localhost:3000/upload/${image.name}`}
          alt="Current Department Image"
          style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
        />
      )}
    </div>
  </div>
)}




            <div>
              <button className='btn btn-success' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit_employee;
