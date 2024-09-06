import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './CSS/index.css'

import App from './App';
import Map from './Map';
import ProdPage from './Produtos';
import ApiPage from './ApiRM';
import GraphPage from './Graficos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Map",
    element: <Map />
  },
  {
    path: "/Produtos",
    element: <ProdPage />
  },
  {
    path: "/ApiRM",
    element: <ApiPage />
  },
  {
    path: "/Graficos",
    element: <GraphPage
    />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
