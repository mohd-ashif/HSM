import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const unique_head = () => {
    const [profileHead, setProfileHead] = useState({});
    const { id } = useParams();  //

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
                    {profileHead.image && (
                        <div className="mb-5">
                            <img
                                src={`http://localhost:3000/upload/${profileHead.image}`}
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
                                <strong>Name:</strong> {profileHead.name}
                            </h5>
                            <br />
                            <p className="card-text">
                                <strong>Number:</strong> {profileHead.number}<br />
                                <br />
                                <strong>Age:</strong> {profileHead.age}<br />

                                <br />
                                <strong>Department:</strong> <Link to={`/unique_department/${name}`}>{profileHead.select}</Link><br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default unique_head ;
