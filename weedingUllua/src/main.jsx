import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GiftList from './pages/giftList/GiftList.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gifts",
    element: <GiftList />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },

])
 


createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)

/*
onst router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/invitados",
    element: <GuestList />,
  },
  {
    path: "/giftlist",
    element: <GiftList/>,
  },
  {
    path: "/Error",
    element: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
  

 
*/