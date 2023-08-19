import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home.jsx";
import About from "./routes/about.jsx";
import Scan from './routes/scan';
import Questions from './routes/questions';
import Context from './components/context.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/scan',
        element: <Scan />,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Context>
);

