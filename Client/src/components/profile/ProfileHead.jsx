import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 

const Profile_head = () => {
  const [profileHead, setProfileHead] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/profile_head/${id}`)
      .then(result => {
        setProfileHead(result.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-11 d-flex justify-content-center">
         
        </div>

        <div className="col-md-12 justify-content-center">
          <Link to="/dashboard/heads" className="btn btn-secondary btn-sm mb-3"  >Back to Department Heads</Link>

         
          <Card sx={{ maxWidth: 600, margin: 'auto' }}>
            
            <CardMedia
              component="img"
              height="440"
              src={`http://localhost:3000/upload/${profileHead.image}`}
              alt={profileHead.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profileHead.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Number:</strong> {profileHead.number}
                <br />
                <br />
                <strong>Age:</strong> {profileHead.age}
                <br />
                <br />
                <strong>Department:</strong> <Link to={`/unique_department/${profileHead.select}`}>{profileHead.select}</Link>
                <br />
                <br />
              </Typography>
            </CardContent>
           
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Profile_head;
