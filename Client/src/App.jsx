import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './App.css';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign from './login/Sign';
import Dashboard from './components/Dashboard';
import Departments from './components/department/Department';
import DepartmentHeads from './components/departmentHeads/DepartmentHeads';
import Employee from './components/employee/Employee';
import Logout from './components/Logout';
import Add_departmentlist from './components/department/add_department';
import Edit_department from './components/department/edit_department';
import Add_Heads from './components/departmentHeads/Add_Heads';
import Edit_Heads from './components/departmentHeads/Edit_Heads';
import Add_Employee from './components/employee/Add_Employee';
import Edit_employee from './components/employee/Edit_employee';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/departments" element={<Departments />} />
          <Route path="/dashboard/heads" element={<DepartmentHeads />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/logout" element={<Logout />} />
          <Route path="/dashboard/add_departments" element={<Add_departmentlist />} />
          <Route path="/dashboard/edit_department" element={<Edit_department />} />
          <Route path="/dashboard/add_heads" element={<Add_Heads/>} />
          <Route path="/dashboard/edit_heads" element={<Edit_Heads/>} />
          <Route path="/dashboard/add_employee" element={<Add_Employee/>} />
          <Route path="/dashboard/edit_employee" element={<Edit_employee/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

