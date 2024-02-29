import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit_Head() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [select, setSelect] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/departments')
      .then(result => setDepartment(result.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/get_heads/${id}`)
      .then(result => {
        setName(result.data.name);
        setNumber(result.data.number);
        setSelect(result.data.select);
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
    formData.append('select', select);

    axios.put(`${process.env.REACT_APP_API_URL}/edit_heads/${id}`, formData)
      .then(result => {
        console.log(result);
        navigate('/dashboard/heads');
      })
      .catch(err => console.log(err));
  };

  return (
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
          <label htmlFor="select"><strong>Select Department</strong></label>
          <select
            className='form-control'
            onChange={(e) => setSelect(e.target.value)}
            value={select}
          >
            <option value="">Select Department</option>
            {department.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
          {image && (
            <div className='mb-2'>
              <label>Image</label>
              <input
                type='file'
                placeholder='Upload'
                className='form-control'
                onChange={handleImageChange}
              />
              <div>
                Current Image:
                <img
                  src={`${process.env.REACT_APP_API_URL}/upload/${image.name}`}
                  alt="Current Department Image"
                  style={{ border: '1px solid black', width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </div>
            </div>
          )}
          <div>
            <button className='btn btn-success' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_Head;