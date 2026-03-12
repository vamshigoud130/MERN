import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'

import RootLayout from './components/RootLayout'
import ContactUs from './components/ContactUs'
import Product from './components/Product'
import Products from './components/Products'
import Home from './components/Home'


function App() {
  const routerobj = createBrowserRouter([
    {
      path : "/",
      element:<RootLayout/>,
      children:[{
        path:"/",
        element:<Home />
      },
      {
        path:"products",
        element:<Products />
      },
      {
        path:"product",
        element:<Product />
      },
      {
        path:"contactus",
        element:<ContactUs />
      }]

    },
  ])
  return (
   
    <RouterProvider router={routerobj} />
  )}
export default App
