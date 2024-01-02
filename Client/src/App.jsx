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
import View_head from './components/card/head';
import View_department from './components/card/department';
import View_employee from './components/card/Employee';
import Dash from './components/Dash';
import Profile_employee from './components/profile/profileEmp';
import Profile_head from './components/profile/ProfileHead';
import Profile_department from './components/profile/profileDep';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/dash" element={<Dash/>} />
          <Route path="/dashboard/departments" element={<Departments />} />
          <Route path="/dashboard/heads" element={<DepartmentHeads />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/logout" element={<Logout />} />
          <Route path="/dashboard/add_departments" element={<Add_departmentlist />} />
          <Route path="/dashboard/edit_department/:id" element={<Edit_department />} />
          <Route path="/dashboard/add_heads" element={<Add_Heads />} />
          <Route path="/dashboard/edit_heads/:id" element={<Edit_Heads />} />
          <Route path="/dashboard/add_employee" element={<Add_Employee/>} />
          <Route path="/dashboard/edit_employee/:id" element={<Edit_employee />} />
        </Route>
        <Route path="/view_head" element={<View_head />} />
        <Route path='/view_department' element={<View_department />} />
        <Route path='/view_employee' element={<View_employee />} />
        <Route path='/Profile_employee/:id' element={<Profile_employee />} />
        <Route path='/profile_head/:id' element={<Profile_head />} />
        <Route path='/profile_department/:id' element={< Profile_department />} />

      </Routes> 
    </Router>
  );
}

export default App;
