import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
import AppliedJob from './Pages/AppliedJob/AppliedJob'
import JobDetails from './Pages/JobDetails/JobDetails';
import Blogs from './Pages/Blogs/Blogs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/applied',
        element: <AppliedJob/>,
        loader: ()=> fetch('./jobs.json') // warning:  this is not proper way.
      },
      {
        path: '/blogs',
        element: <Blogs/>,
        loader: ()=> fetch('./jobs.json') // warning:  this is not proper way.
      },
      {
        path: '/job/:id',
        element: <JobDetails/>,
        loader: ()=> fetch('./jobs.json') // warning:  this is not proper way.
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
