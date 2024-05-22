import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './Config/Context.tsx'
import PrivateRoute from './Config/Provider.tsx'

import App from './App.tsx'
import ErrorPage from './Router/ErrorPage'
import Site from './Site/Site'
import Login from './Site/Router/Login.tsx'
import NewLogin from './Site/Router/NewLogin.tsx'
import ResetSenha from './Site/Router/ResetSenha.tsx'
import MenuHome from './App/Components/NavBar.tsx'
import Home from './App/Home/Home.tsx'
import NovoCliente from './App/Router/NovoCliente.tsx'
import EditarCliente from './App/Router/EditarCliente.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Site />,
      },
      {
        path: '/app',
        element: <Login />,
      },
      {
        path: '/app/newlogin',
        element: <NewLogin />,
      },
      {
        path: '/app/resetsenha',
        element: <ResetSenha />,
      },
    ],
  },
  {
    element: (
      <PrivateRoute>
        <MenuHome />
      </PrivateRoute>
    ),

    children: [
      {
        path: '/app/home',
        element: <Home />,
      },
      {
        path: '/app/home/novocliente',
        element: <NovoCliente />,
      },
      {
        path: '/app/home/editarcliente/:id',
        element: <EditarCliente />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLAnchorElement,
)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
