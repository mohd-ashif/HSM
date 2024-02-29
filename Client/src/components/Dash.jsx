import React from 'react';
import { BsHeart, BsBuilding, BsPerson, BsExclamationTriangle } from 'react-icons/bs';
import {FaUsers } from 'react-icons/fa'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Link } from 'react-router-dom';


function Dash(props) {
 
  const data = [
    { name: 'Emergency', patients: 20, doctors: 8 },
    { name: 'Surgery', patients: 15, doctors: 10 },
    { name: 'Pediatrics', patients: 25, doctors: 12 },
    { name: 'Maternity', patients: 18, doctors: 7 },
    { name: 'Orthopedics', patients: 30, doctors: 15 },
    { name: 'Cardiology', patients: 22, doctors: 9 },
    { name: 'Radiology', patients: 28, doctors: 11 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>HOSPITAL MANAGEMENT</h3>
      </div>

      <div className='main-cards'>
      <Link to="/view_department"><div className='card p-4'>
          <div className='card-inner'>
          <h3>DEPARTMENTS</h3> 
            <BsBuilding className='card_icon' />
          </div>
          <h1>5</h1>
        </div> </Link>
        <Link to="/view_head"><div className='card'>
          <div className='card-inner'>
            <h3>DEPARTMENTS HEADS</h3>
            <BsPerson className='card_icon' />
          </div>
          <h1>6</h1>
        </div> </Link >
        <Link to="/view_employee"> <div className='card p-4'>
          <div className='card-inner'>
            <h3>EMPLOYEES</h3>
            <FaUsers  className='card_icon' />
          </div>
          <h1>5</h1>
        </div> </Link>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsExclamationTriangle className='card_icon' />
          </div>
          <h1>5</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='patients' fill='#8884d8' />
            <Bar dataKey='doctors' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='patients' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='doctors' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Dash;
