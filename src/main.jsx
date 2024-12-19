import React from 'react'

import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Login from './components/Login/Login.jsx'
import AboutUs from './components/About/Aboutus.jsx'
import Menu from './components/Menu/Menu.jsx'
import Cart from './components/Cart/Cart.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "Contact",
        element: <ContactUs/>
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "About",
        element: <AboutUs/>
      },
      {
        path: "Menu",
        element: <Menu/>
      },
      {
        path: "Cart",
        element: <Cart/>
      }
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
