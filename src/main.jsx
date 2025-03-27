import { RouterProvider } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import routes from "./routes"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
