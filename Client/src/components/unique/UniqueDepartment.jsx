import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const UniqueDepartment = () => {
  const [uniqueDept, setUniqueDept] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/unique_department/${name}`)
      .then(result => {
        setUniqueDept(result.data);
      })
      .catch(err => console.error(err));
  }, [name]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row">
        <div className="col-md-10">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/upload/${uniqueDept.image}`}
                style={{ width: '400px', height: '300px', marginLeft: "100px", borderRadius: '50%' }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Name:</strong> {uniqueDept.name}
                </Card.Title>
                <Card.Text>
                  <strong>Year Found:</strong> {uniqueDept.year}
                  <br />
                  <br />
                  <strong>Description:</strong> {uniqueDept.description}
                  <br />
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted"></small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default UniqueDepartment;
