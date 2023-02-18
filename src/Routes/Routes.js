import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About/About";
import Contact from "../pages/Contact/Contact";
import DetailCategory from "../pages/DetailCategory/DetailCategory";
import Home from "../pages/Home/Home";

import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Login/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/login',
                element:<Login></Login>
            },

            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/category/:id',
                element:<DetailCategory></DetailCategory>,
                loader:({params})=>fetch(`https://job-portal-server-mauve.vercel.app/category/${params.id}`)
            },

            {
                path:'/about',
                element:<About></About>
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            },



            
        ]
    }
])


export default router ;