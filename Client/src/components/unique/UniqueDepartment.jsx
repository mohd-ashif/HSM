import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const UniqueDepartment = () => {
  const [uniqueDept, setUniqueDept] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/unique_department/${name}`)
      .then(result => {
        setUniqueDept(result.data);
      })
      .catch(err => console.error(err));
  }, [name]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row">
        <div className="col-md-10">
          <Card>
            <CardMedia
              component="img"
              alt="Department Image"
              height="300"
              image={`http://localhost:3000/upload/${uniqueDept.image}`}
              style={{ width: '400px', height: '300px', marginLeft: "0px", borderRadius: '50%' }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                <strong>Name:</strong> {uniqueDept.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Year Found:</strong> {uniqueDept.year}
                <br />
                <br />
                <strong>Description:</strong> {uniqueDept.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UniqueDepartment;
  