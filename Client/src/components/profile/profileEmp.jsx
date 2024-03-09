import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ArrowLeftOutlined } from '@ant-design/icons';

function ProfileEmployee() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile_employee/${id}`)
      .then(result => {
        setProfile(result.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-11 d-flex justify-content-center">
          
        </div>
        <div className="col-md-12">
          <Link to="/dashboard/heads/" className="btn btn-secondary btn-sm mb-3"> <ArrowLeftOutlined /></Link>
          <Card sx={{ maxWidth: 600, height: 700 }}>
            <CardMedia
              component="img"
              height="400"
              src={`${import.meta.env.VITE_API_BASE_URL}/upload/${profile.image}`}
              alt={profile.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Name:</strong> {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Number:</strong> {profile.number}<br />
                <br />
                <strong>Age:</strong> {profile.age}<br />
                <br />
                <strong>Description:</strong> {profile.description}<br />
                <br />
                <strong>Department:</strong> <Link to={`/unique_department/${profile.selectDepartment}`}>{profile.selectDepartment}</Link><br />
                <br />
                <strong>Department Head:</strong> <Link to={`/unique_head/${profile.selectHead}`}>{profile.selectHead}</Link>
              </Typography>
            </CardContent>
            
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfileEmployee;
