import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'about/', element: <About /> },
        { path: 'contact/', element: <Contact /> },
        { path: 'services/', element: <Services /> }
      ]
    }
  ]
);


export default function Entrypoint() {
  return (
    <RouterProvider router={Routes} />
  )
}
