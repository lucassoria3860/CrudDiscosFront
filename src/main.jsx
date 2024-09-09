//Modulos 
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Componentes
import App from './App.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Info from './componentes/info.jsx'
import Proximamente from './componentes/Proximamente.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (<div>Error</div>)
    
  },
  {
    path: "/discos",
    element: <App />,
    errorElement: (<div>Disco no Esta</div>)
  },
  {
    path: "/info",
    element: <Info />,
    errorElement: (<div>Disco no Esta</div>)
  },
  {
    path: "/Proximamente",
    element: <Proximamente />,
    errorElement: (<div>Disco no Esta</div>)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
