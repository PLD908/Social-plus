import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Root from "./routes/Root";
import ErrorPage from './error-page';
import Contact, {Favorite} from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contacts/:contactId",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
