# Hospital Management System

## Introduction

Welcome to the Hospital Manager project! This application aims to provide a basic hospital management system with features tailored for administrative tasks and easy navigation for end-users.

## Features

### Admin Features

1. **Login / Logout**
   - Securely log in and out of the admin account.

2. **Manage Departments**
   - Add, edit, or delete departments.
   - Department details include name, profile image, year founded, and description.

3. **Manage Department Heads**
   - Add, edit, or delete department heads.
   - Department Head details include name, employee number, age, profile image, profile description, and the associated department.

4. **Manage Employees**
   - Add, edit, or delete employees.
   - Employee details include name, employee number, age, profile image, profile description, associated department, and reporting structure.


### Front End Features

1. **Employee Listings**
   - Display a list of all employees with their name, employee number, and image.
   - Clicking on an employee redirects to the Employee Detail page.

2. **Department Head Listings**
   - Display a list of all department heads with their name, employee number, and image.
   - Clicking on a department head redirects to the Department Head Detail page.

3. **Department Listings**
   - Display a list of all departments with their name and image.
   - Clicking on a department redirects to the Department Detail page.

## Tech Stack

The project is built using the following technologies and packages:

```json
{
  "dependencies": {
    "@ant-design/icons": "^5.2.6",
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@fortawesome/fontawesome-free": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@mui/icons-material": "^5.15.3",
    "@mui/material": "^5.15.3",
    "antd": "^5.12.8",
    "axios": "^1.6.2",
    "bootstrap": "^5.3.2",
    "bootstrap-icons": "^1.11.2",
    "chart.js": "^4.4.1",
    "mdb-react-ui-kit": "^7.0.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.2",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-router-dom": "^6.21.1",
    "react-slick": "^0.29.0",
    "recharts": "^2.10.3",
    "slick-carousel": "^1.8.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.10"
  }
}

