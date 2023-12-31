import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit_department() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/get_department/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setYear(result.data.year);
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
    formData.append('year', year);
    formData.append('description', description);

    axios.put(`http://localhost:3000/edit_department/${id}`, formData)
      .then(result => {
        console.log(result);
        navigate('/dashboard/departments');  
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
  <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>

          <form onSubmit={handleFormSubmit}>
            <h2>Edit Departments</h2>
            <div className='mb-2'>
              <label>Department Name</label>
              <input
                type='text'
                placeholder='Enter Department Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Year Founded</label>
              <input
                type='number'
                placeholder='Enter Year Founded'
                className='form-control'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label>Description</label>
              <input
                type='text'
                placeholder='Enter Description'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
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
                    src={`http://localhost:3000/upload/${image.name}`}
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
    </div>
  );
}

export default Edit_department;
