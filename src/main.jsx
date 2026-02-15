import { StrictMode } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CarritoProvider } from './Components/Context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <CarritoProvider>
    <App />
  </CarritoProvider>,
)
