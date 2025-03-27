import { RouterProvider } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import routes from "./routes"
import App from './App'

createRoot(document.getElementById('root')).render(
  // <RouterProvider router={routes}/>
  <App/>
)
