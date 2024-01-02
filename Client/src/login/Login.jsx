import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    axios.post('http://localhost:3000/login', { email, password })
      .then(response => {
        console.log(response.data);

        if (response.data === "Success") {
          navigate('/dashboard/dash');
        } else {
          console.log("Login failed");
        }
      })
      .catch(error => {
        console.error('An error occurred during login:', error);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <h2>Login page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' placeholder='Enter email' autoComplete='on' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Enter password' autoComplete='off' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>

          <div className="mb-1">
            <input type="checkbox" name='tick' id='tick' />
            <label htmlFor="password">You are Agree with terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
