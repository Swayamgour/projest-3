import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './pages/Singup';
import Login from './pages/Login'
import Input from './Input/Input';
import Forget from './pages/Forget';
import Nextbutten from './pages/Nextbutten'
import Singnewpage from './pages/Singnewpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Singup",
    element: <Singup/>,
  },
  {
    path: "Input",
    element: <Input />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Forget",
    element: <Forget />,
  },
  {
    path: "Nextbutten",
    element: <Nextbutten />,
  },
  {
    path: "Singnewpage",
    element: <Singnewpage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
