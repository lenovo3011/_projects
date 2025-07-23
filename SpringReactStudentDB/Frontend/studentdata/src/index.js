 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css" ;
import "bootstrap/dist/js/bootstrap.bundle" ;
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Update from './Update';
import AddData from './AddData';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rout = createBrowserRouter([{
  path: '/',
  element: <App /> } , {
  path : '/update/:id' ,
  element : <Update />},{ 
  path : '/adddata' ,
  element : <AddData/> }

]) 
root.render(
  <React.StrictMode>
    <RouterProvider router={rout}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
