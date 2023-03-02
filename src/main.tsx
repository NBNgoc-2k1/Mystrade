import { element } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AuthDialog from './global_components/AuthDialog/AuthDialog'
import './index.css'
import ErrorPage from './pages/error/ErrorPage'
import Homepage from './pages/home/screens/Homepage'
import Provider from './provider'
import './tailwind.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <Homepage />,
        errorElement:<ErrorPage />
      },
      {
        path: '/error',
        element: <ErrorPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
      <AuthDialog />
    </Provider>
  </React.StrictMode>,
)
