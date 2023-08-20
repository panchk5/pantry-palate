import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Scan from "./routes/scan";
import Questions from "./routes/questions";
import Recipes from "./routes/recipes";
import Home from "./routes/home.jsx";
import Context from "./components/context.jsx";
import Shop from "./routes/shop.jsx";

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
        path: "/scan",
        element: <Scan />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Context>
);
