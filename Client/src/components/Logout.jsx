import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Link to="/">
        <button className="btn btn-danger">Log out</button>
      </Link>
    </div>
  );
};

export default Logout;
