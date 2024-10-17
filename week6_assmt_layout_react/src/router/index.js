// set router
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import { createBrowserRouter} from 'react-router-dom'

// configure route instance
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },{
        path:"/login",
        element: <Login/>
    }
])

export default router