import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Profile_employee() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/profile_employee/${id}`)
      .then(result => {
        console.log(result);
        setProfile(result.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-11 d-flex justify-content-center">
          {profile.image && (
            <div className="mb-5">
              <img
                src={`http://localhost:3000/upload/${profile.image}`}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </div>
          )}
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Name:</strong> {profile.name}</h5>
              <br />
              <p className="card-text">
                <strong>Number:</strong> {profile.number}<br />
                <br />
                <strong>Age:</strong> {profile.age}<br />
                <br />
                <strong>Description:</strong> {profile.description}<br />
                <br />
                <strong>Department:</strong> <Link to={`/view_department`}>{profile.selectDepartment}</Link><br />
                <br />
                <strong>Department Head:</strong> <Link to={`/view_head`}>{profile.selectHead}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_employee;
