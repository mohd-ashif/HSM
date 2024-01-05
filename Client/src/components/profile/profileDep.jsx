import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Profile_department = () => {
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
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row">
        <div className="col-md-10">
          <Link to="/dashboard/departments"> {/* Assuming "/departments" is your departments listing page */}
            <Button variant="outline-primary" className="mb-3 ">
              Back to Departments
            </Button>
          </Link>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/upload/${profileDept.image}`}
                style={{ width: '400px', height: '300px', marginLeft: "100px", borderRadius: '50%' }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Name:</strong> {profileDept.name}
                </Card.Title>
                <Card.Text>
                  <strong>Year Found:</strong> {profileDept.year}
                  <br />
                  <br />
                  <strong>Description:</strong> {profileDept.description}
                  <br />
                </Card.Text>
                <Link to={`/unique_department/${profileDept.name}`}>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile_department;
