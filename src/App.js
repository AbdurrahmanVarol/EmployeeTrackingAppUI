import './App.css';
import { DefaultContextProvider } from './contexts/DefaultContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <DefaultContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout></DefaultLayout>}>
              <Route index element={<Home></Home>}></Route>
            </Route>
            <Route element={<AuthLayout></AuthLayout>}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DefaultContextProvider>
    </div>
  );
}

export default App;
