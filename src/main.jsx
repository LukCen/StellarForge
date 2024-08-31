import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom"
import Homepage from './pages/Homepage.jsx'
import ProductPage from './pages/ProductPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/product/:productId',
    element: <ProductPage />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
