import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Profile_department  = () => {
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
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-11 d-flex justify-content-center">
                    {profileDept.image && (
                        <div className="mb-5">
                            <img
                                src={`http://localhost:3000/upload/${profileDept.image}`}
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
                                <strong>Name:</strong> {profileDept.name}
                            </h5>
                            <br />
                            <p className="card-text">
                                <strong>Year Found:</strong> {profileDept.year}<br />
                                <br />
                                <strong>Description:</strong> {profileDept.description}<br />

                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile_department ;
