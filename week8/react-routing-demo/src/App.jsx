import { createBrowserRouter , RouterProvider } from "react-router"

import RootLayOut from "./components/RootLayOut"
import Login from "./components/Login"
import Register from "./components/Register"
import Technologies from "./components/Technologies"
import Java from "./components/Java"
import Python from "./components/Python"
import Cpp from "./components/Cpp"
import Home from "./components/Home"

function App() {

  //create router configuration
  const routerobj = createBrowserRouter([
    {
      path : "/",
      element :<RootLayOut/>,
      children:[{
        path:"/",
        element:<Home />
      },
      {
        path:"Login",
        element:<Login />
      },
      {
        path:"Register",
        element:<Register />
      },
      {
        path:"Technologies",
        element:<Technologies />,
        children:[{
          path:"java",
          element:<Java />
        },
        {
          path:"python",
          element:<Python />
        },
        { 
          path:"cpp",
          element:<Cpp /> 

        }]
      },
      
      ]
    }
  ])
  

  return (
    <RouterProvider router={routerobj} />
      
    
  )
}

export default App
