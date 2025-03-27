import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Liked from "./Components/Liked/liked";


const router = createBrowserRouter([
    {
        path: '/React-Harry_Potter',
        element: <App/>
    },
    {
        path: '/React-Harry_Potter/Liked',
        element: <Liked/>
    },
    {
        path: '\*',
        element: <div>Error: Page is not found</div>
    }
])

export default router