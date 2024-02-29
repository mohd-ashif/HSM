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

  const [departments, setDepartments] = useState([]);
  const [departmentHeads, setDepartmentHeads] = useState([]);



  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/get_employee/${id}`)
      .then(result => {
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
    formData.append('selectHead', selectHead);
    formData.append('selectDepartment', selectDepartment);

    axios.put(`${process.env.REACT_APP_API_URL}/edit_employee/${id}`, formData)
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
              <label htmlFor="selectDepartment"><strong>Select Department</strong></label>
              <select
                className='form-control'
                onChange={(e) => setSelectDepartment(e.target.value)}
                value={selectDepartment}
              >
                <option value="">Select Department</option>
                {departments.map((data) => (
                  <option key={data.id} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor="selectHead"><strong>Select Department Head</strong></label>
              <select
                className='form-control'
                onChange={(e) => setSelectHead(e.target.value)}
                value={selectHead}
              >
                <option value="">Select Department Head</option>
                {departmentHeads.map((value) => (
                  <option key={value.id} value={value.name}>
                    {value.name}
                  </option>
                ))}
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
                      src={`${process.env.REACT_APP_API_URL}/upload/${image.name}`}
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
