import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './App.css';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign from './login/Sign';
import Dashboard from './components/Dashboard';
import Departments from './components/Department';
import DepartmentHeads from './components/DepartmentHeads';
import Employee from './components/Employee';
import Logout from './components/Logout';
import Add_departmentlist from './components/add_departmen';
import Edit_department from './components/edit_department';
import Add_Heads from './components/Add_Heads';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Departments />} />
          <Route path="/dashboard/heads" element={<DepartmentHeads />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/logout" element={<Logout />} />
          <Route path="/dashboard/add_departments" element={<Add_departmentlist />} />
          <Route path="/dashboard/edit_department" element={<Edit_department />} />
          <Route path="/dashboard/add_heads" element={<Add_Heads/>} />
          <Route path="/dashboard/edit_heads" element={<Edit_department/>} />
        
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

