import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './globals.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Planner from './routes/Planner.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu-planner",
    element: <Planner />,
  }, 
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
