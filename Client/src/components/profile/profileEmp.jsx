import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Profile_employee() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/profile_employee/${id}`)
      .then(result => {
        setProfile(result.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-11 d-flex justify-content-center">
         
        </div>

        <div className="col-md-12">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/upload/${profile.image}`}
                style={{ width: '400px', height: '300px', marginLeft: "100px", borderRadius: '50%' }}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Name:</strong> {profile.name}
                </Card.Title>
                <Card.Text>
                  <strong>Number:</strong> {profile.number}<br />
                  <br />
                  <strong>Age:</strong> {profile.age}<br />
                  <br />
                  <strong>Description:</strong> {profile.description}<br />
                  <br />
                  <strong>Department:</strong> <Link to={`/unique_department/${profile.selectDepartment}`}>{profile.selectDepartment}</Link><br />
                  <br />
                  <strong>Department Head:</strong> <Link to={`/view_head`}>{profile.selectHead}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default Profile_employee;
