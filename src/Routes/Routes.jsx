import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetail from "../Pages/NewsDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path: '/news/:id',
                element: <NewsDetail></NewsDetail>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;