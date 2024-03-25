import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './custom.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import Projects from './projects';
import Contacts from './contact';
import Error404 from './components/404';
import Nav from './components/Nav';
import Footer from './components/Footer';

function Layout() {
  return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact-us",
        element: <Contacts />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
