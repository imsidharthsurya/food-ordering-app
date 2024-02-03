import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import RestaurantInfo from "./components/RestaurantInfo"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const AppLayout=()=>{
    return (
        <div className="main">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantInfo/>
            }
        ]
    }

])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)