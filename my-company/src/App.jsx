import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'

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
