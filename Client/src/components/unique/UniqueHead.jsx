import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';  

const Unique_head  = () => {
  const [uniqueHead, setUniqueHead] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/Unique_Head/${name}`)
      .then(result => {
        setUniqueHead(result.data);
      })
      .catch(err => {
        console.error(err);
       
      });
      
  }, [name]);

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
              src={`${import.meta.env.VITE_API_BASE_URL}/upload/${uniqueHead.image}`}
              alt={uniqueHead.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {uniqueHead.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Number:</strong> {uniqueHead.number}
                <br />
                <br />
                <strong>Age:</strong> {uniqueHead.age}
                <br />
                <br />
                <strong>Department:</strong> <Link to={`/unique_department/${uniqueHead.select}`}>{uniqueHead.select}</Link>
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

export default Unique_head ;
