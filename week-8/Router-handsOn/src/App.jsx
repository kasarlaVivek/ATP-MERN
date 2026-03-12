import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ContactUs from './components/ContactUs'
import Product from './components/Product'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />
        }, {
          path: "productslist",
          element: <ProductsList />,
        },
        {
          path: "product",
          element: <Product />
        },
        {
          path: "contactus",
          element: <ContactUs />
        }
      ]
    }
  ])
  return <RouterProvider router={routerObj} />
}

export default App
