import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_BASE_URL}`, { name, email, password })
      .then(result => {
        navigate('/login');
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 signPage'>
      <div className='p-3 rounded w-25 border signForm'>
        <h2>Sign Up page</h2>
        <form onSubmit={submit}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Enter name' autoComplete='on' className='form-control rounded-0' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' placeholder='Enter email' autoComplete='on' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Enter password' autoComplete='off' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>

          <div className="mt-3">
            <h4>Already have an account?</h4>
            <Link to='/login' className='btn btn-info w-100 rounded-0'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
