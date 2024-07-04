// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import DownloadPage from "./DownloadPage/DownloadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "features",
    element: <FeaturesPage/>,
  },

  {
    path: "download",
    element: <DownloadPage/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

