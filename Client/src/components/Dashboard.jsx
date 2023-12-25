import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CiHospital1 } from "react-icons/ci";

import axios from "axios";

const Dashboard = () => {
  const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        anvigate('/')
      }
    })
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
         
            >
                <br />
              <li>
              
              <i class="p-3 fs-3 bi bi-hospital ms-5" ></i>

              </li>
              <br />
              
            
               <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-dark px-0 align-middle"
                >
                 <i class="fs-4 bi bi-hospital ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Department</span>
                </Link>
              </li>
              <li className="w-100">
               
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/heads"
                  className="nav-link px-0 align-middle text-dark"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Department Heads
                  </span>
                </Link>
              </li>
              <li className="w-100">
               
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-dark"
                >
                  <i className="fs-4 bi bi-person-plus ms-2"></i>
                  <span className="ms-2">Employees</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
              <Link  to="/dashboard/logout"
                  className="nav-link px-0 align-middle text-dark"
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Hospital Management System</h4>
            </div>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;