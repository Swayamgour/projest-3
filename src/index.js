import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './pages/Singup/Singup';
import Login from './pages/LogIn/Login'
import Home from './Home/Home';
import Forget from './pages/ForgetPage/Forget';
import Nextbutten from './pages/NextButten/Nextbutten'
import Singnewpage from './pages/SingButten/Singnewpage';
import Profile from './LeftSecList/Profile/Profile';
import Profile2 from './LeftSecList/Profile_two/Profile2';

import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Singup",
    element: <Singup />,
  },
  {
    path: "Home",
    element: <Home />,
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
  }, {
    path: "Profile",
    element: <Profile />,
  },
  {     
    path: "/Profile2/:name",
    element: <Profile2 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
