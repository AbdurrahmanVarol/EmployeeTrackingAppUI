import './App.css';
import { DefaultContextProvider } from './contexts/DefaultContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';
import CreateTicket from './pages/CreateTicket';
import UnAssignedTickets from './pages/UnAssignedTickets';
import Departments from './pages/Departments';

function App() {
  return (
    <div>
      <DefaultContextProvider>
        <BrowserRouter>
          <Routes>
          <Route element={<AuthLayout></AuthLayout>}>
              <Route index path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
            <Route element={<DefaultLayout></DefaultLayout>}>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/employees' element={<Employees></Employees>}></Route>
              <Route path='/employeeDetails' element={<EmployeeDetails></EmployeeDetails>}></Route>
              <Route path='/createTicket' element={<CreateTicket></CreateTicket>}></Route>
              <Route path='/unassignedTickets' element={<UnAssignedTickets></UnAssignedTickets>}></Route>
              <Route path='/departments' element={<Departments></Departments>}></Route>
            </Route>           
          </Routes>
        </BrowserRouter>
      </DefaultContextProvider>
    </div>
  );
}

export default App;
