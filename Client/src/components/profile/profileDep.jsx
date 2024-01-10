import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ProfileDepartment = () => {
  const [profileDept, setProfileDept] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/profile_department/${id}`)
      .then(result => {
        setProfileDept(result.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <div className="row">
        <div className="col-md-10">
          <Link to="/dashboard/departments">
            <Button variant="outline-primary" className="mb-3">
            <ArrowLeftOutlined />
            </Button>
          </Link>
          <Card sx={{ maxWidth: 600 , height:600}}>
            <CardMedia
              component="img"
              height="400" 
              src={`http://localhost:3000/upload/${profileDept.image}`}
              alt={profileDept.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profileDept.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Year Found:</strong> {profileDept.year}
                <br />
                <br />
                <strong>Description:</strong> {profileDept.description}
              </Typography>
              <Link to={`/unique_department/${profileDept.name}`}>
                <Typography variant="caption" color="text.secondary">
                  Last updated 3 mins ago
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileDepartment;
