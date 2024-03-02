import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import Admin from './Admin';
import AccessDenied from './AccessDenied';
import ProtectedRoute from './ProtectedRoute';
import ManagedProduct from './ManagedProduct';
import ManagedCustomer from './ManagedCustomer';

const root = ReactDOM.createRoot(document.getElementById('root'));
let user = sessionStorage.getItem("user") != null ? JSON.parse(sessionStorage.getItem("user")) : '';
//console.log(`Check user role: ${user.role}`);
let role = user.role;
let accessAdminRoles = ['admin', 'employee']

root.render(
  <React.StrictMode>
    <ToastContainer theme='colored' />
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
        <Route path='/403' Component={AccessDenied} />
        <Route path='/admin' element={<ProtectedRoute user={user} isAccess={!!user && accessAdminRoles.includes(role)} redirectPath='/login' ></ProtectedRoute>}>
          <Route index Component={Admin} />
          <Route path='product' Component={ManagedProduct} />
          <Route path='customer' Component={ManagedCustomer} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
