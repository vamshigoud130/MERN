import RootLayout from './components/RootLayout'
import Home from './components/Home'
import AddArticle from './components/AddArticle'
import AdminDashboard from './components/AdminDashboard'
import AuthorDashboard from './components/AuthorDashboard'
import Login from './components/Login'
import Register from './components/Register'
import UserDashboard from './components/UserDashboard'
import {createBrowserRouter,RouterProvider} from 'react-router'
import {Toaster} from 'react-hot-toast'

function App() {

  const routingObj = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'addarticle',
          element:<AddArticle/>
        },
        {
          path:'admindashboard',
          element:<AdminDashboard/>
        },
        {
          path:'authordashboard',
          element:<AuthorDashboard/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'userdashboard',
          element:<UserDashboard/>
        }
      ]
    }
  ])

  return (
    <>
    < Toaster position='top-center' reverseOrder={false} />,    
    <RouterProvider router={routingObj}/>
    </>
    
  )
}

export default App